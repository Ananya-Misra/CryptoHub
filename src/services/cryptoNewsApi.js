import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { cryptoApi } from "./cryptoApi";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "93c0793aa6msh9661abeed4f08a8p1207e5jsnddeae6e778f6",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};


const params={
 freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'}


const baseUrl='https://bing-news-search1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoNewsHeaders,params});



export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptosNews:builder.query(
            {
                query:({newsCategory,params})=>createRequest(`news/search?q=${newsCategory}`)

            }
        )

    })
}
);

export const {useGetCryptosNewsQuery}=cryptoNewsApi;