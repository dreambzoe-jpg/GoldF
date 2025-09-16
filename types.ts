
export enum Sentiment {
    BULLISH = 'Bullish',
    BEARISH = 'Bearish',
    NEUTRAL = 'Neutral',
}

export interface AnalysisResult {
    price: number;
    change: number;
    sentiment: Sentiment;
    analysis: string;
    timestamp: string;
}
