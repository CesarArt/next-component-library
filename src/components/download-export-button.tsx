"use client";

import { useState } from "react";
import { Button } from ".";

interface DownloadExportButtonProps {
    format?: "csv" | "json";
}

export default function DownloadExportButton({ format = "csv" }: DownloadExportButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        try {
            setLoading(true);

            const response = await fetch(`/api/export?format=${format}`);

            if (!response.ok) throw new Error("Error to download file");

            // Convert to Blob
            const blob = await response.blob();

            // Create a temporary link
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `export.${format}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error(err);
            alert("The file could not be downloaded.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button iconName="Download" variant={format === "json" ? "secondary" :"primary" }  onClick={handleDownload}>{loading ? "Download..." : `Donwload ${format ?? "csv"}`}</Button>
    );
}
