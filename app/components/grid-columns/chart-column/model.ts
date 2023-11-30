export interface ChartData {
    [symbol: string]: {
        [period: string]: [number, number][];
    };
}