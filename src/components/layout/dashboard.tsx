"use client";
import { useEffect, useMemo, useState } from "react";
import { Card, CardBody, CardHeader } from "..";
import { getStats } from "@/app/api/tracking/trackEvent";
import { componentsStats } from "@/utils/types/stats";
import { BarChartBenchmark } from "../ui/chart/bar-chart-benchmark";
import { dataChart } from "@/utils/types/charts";
import { findMostFrequent, getColorGradientByPercentage, groupFavoritesByComponent } from "@/utils/functions/chart";
import { colorByPercentageTop } from "@/lib/utils";
import { TreemapChart } from "../ui/chart/tree-map-chart";

export default function Dashboard() {
    const [stats, setStats] = useState<componentsStats>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getStats()
            setStats(data ?? undefined)
        }
        fetchData();
    }, [])

    const chartData = useMemo(() => {
        const totalInteractions = stats?.stats.reduce((v, c) => v + c.count, 0)
        const totalComponents = stats?.stats.length
        const totalFavorites = stats?.myFavorites.length
        const componentMoreInteraction = stats?.stats.sort((a,b) => a.count - a.count)[0]
        const interactionsChart :  dataChart[] = stats?.stats.map( (st) => {
            const maxValue = Math.max(...stats?.stats.map((d) => d.count))
            const color = getColorGradientByPercentage(st.count, maxValue, colorByPercentageTop)
            return { key: st._id, value: st.count, color:color }
        })??[] 

        const favoriteComponent = findMostFrequent(stats?.myFavorites ?? [], "component") 
        const groupFavorites = groupFavoritesByComponent(stats?.myFavorites ?? [])
        console.log("groupFavorites: ",groupFavorites)

        return {
            totalInteractions: totalInteractions ?? 0,
            totalComponents: totalComponents ?? 0,
            totalFavorites: totalFavorites ?? 0,
            componentMoreInteraction,
            interactionsChart,
            favoriteComponent,
            groupFavorites
        }
    }, [stats])
    return (
        <section className="relative flex flex-col gap-2 h-full w-full p-4">
            <div className="space-y-1 px-4">
                <h1 className="text-4xl font-bold">
                    Dashboard
                </h1>
                <h2 className="text-xl text-muted">
                    Overview of the UI Component Library
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                <Card>
                    <CardHeader>Total components with interactions</CardHeader>
                    <CardBody>
                        <p className="text-4xl">{chartData.totalComponents}</p>
                    </CardBody>
                </Card>
                {chartData.componentMoreInteraction && 
                <Card>
                    <CardHeader>Most interacted component</CardHeader>
                    <CardBody>
                        <p className="text-4xl capitalize">{chartData.componentMoreInteraction._id}</p>
                    </CardBody>
                </Card>
                }

                <Card>
                    <CardHeader>Components with interactions</CardHeader>
                    <CardBody>
                        <BarChartBenchmark dataChart={chartData.interactionsChart} />
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>Total interactions</CardHeader>
                    <CardBody>
                        <p className="text-4xl">{chartData.totalInteractions}</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>Total Favorite Components</CardHeader>
                    <CardBody>
                        <p className="text-4xl">{chartData.totalFavorites}</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>Favorite Component</CardHeader>
                    <CardBody>
                        <p className="text-4xl capitalize">{chartData.favoriteComponent}</p>
                    </CardBody>
                </Card>
                {chartData.groupFavorites.length > 0 &&
                <Card>
                    <CardHeader>Favorite Components Variants</CardHeader>
                    <CardBody>
                        <TreemapChart dataChart={chartData.groupFavorites} />
                    </CardBody>
                </Card>
                }
            </div>
        </section>
    );
}