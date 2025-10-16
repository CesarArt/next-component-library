export interface dataChart{
    key: string,
    value: number
    color?: string
}
export interface colorByPercentageI{
    color: string,
    min: number
    max: number
}
export interface dataChartPie{
    key: string,
    value: number
    colorFrom: string;
    colorTo: string;
}
export interface dataCharBubble{
    name: string,
    sector: string;
    value: number
}
