import React from "react";
import ContentPage from "./contentPage";
import ContentDetailPage from "./contentDetailPage";

export default {
    component: ContentPage,
    title: 'Shuofeng Content Page',
};

export const contentPage = () => <ContentPage />;
export const contentDetailPage = () => <ContentDetailPage />;