import React from "react";
import ContentCard from "./contentCard";
import HorizontalContentCard from "./horizontalContentCard";
import RecommendContentCard from "./recommendContentCard";

export default {
    component: ContentCard,
    title: 'ContentCard',
};

export const contentCard = () => <ContentCard />;
export const horizontalContentCard = () => <HorizontalContentCard />;
export const recommendContentCard = () => <RecommendContentCard />;