
import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult } from '../types';
import { Sentiment } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const analysisSchema = {
    type: Type.OBJECT,
    properties: {
        price: {
            type: Type.NUMBER,
            description: "The current price of XAUUSD in USD per ounce. Example: 2350.55"
        },
        change: {
            type: Type.NUMBER,
            description: "The 24-hour price change in USD. Can be positive or negative. Example: -12.30"
        },
        sentiment: {
            type: Type.STRING,
            enum: [Sentiment.BULLISH, Sentiment.BEARISH, Sentiment.NEUTRAL],
            description: "The overall market sentiment for Gold (XAUUSD)."
        },
        analysis: {
            type: Type.STRING,
            description: "A detailed but beginner-friendly fundamental analysis of the current gold market (XAUUSD). Explain the key drivers (like inflation, Fed policy, geopolitical tensions, USD strength) and what they mean for the price. Keep it professional, insightful, and around 150-200 words."
        },
    },
    required: ["price", "change", "sentiment", "analysis"]
};

export const fetchMarketAnalysis = async (): Promise<AnalysisResult> => {
    try {
        const prompt = `
            Act as a professional financial analyst for a top-tier investment firm. Your task is to provide a real-time, fundamental analysis of the Gold market (XAUUSD). 
            
            Aggregate information from credible sources like Reuters, Bloomberg, MarketWatch, and the latest economic calendar events.
            
            Provide the following information in a structured JSON format:
            1.  **Current Price**: The most recent spot price for XAUUSD.
            2.  **24h Change**: The price change over the last 24 hours.
            3.  **Market Sentiment**: Categorize the current sentiment as "Bullish", "Bearish", or "Neutral" based on all available data.
            4.  **Analysis**: Write a comprehensive but easy-to-understand summary explaining the current market dynamics.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: analysisSchema,
            },
        });

        const jsonStr = response.text.trim();
        const data = JSON.parse(jsonStr);

        return {
            ...data,
            timestamp: new Date().toLocaleString(),
        };
    } catch (error) {
        console.error("Error fetching market analysis from Gemini API:", error);
        throw new Error("Could not retrieve market analysis.");
    }
};
