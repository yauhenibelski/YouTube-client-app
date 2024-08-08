interface ContentThumbnailSize {
    url: string;
    width: number;
    height: number;
}

export interface Statistics {
    viewCount?: string;
    likeCount?: string;
    favoriteCount?: string;
    commentCount?: string;
}

interface Thumbnail {
    default: ContentThumbnailSize;
    medium: ContentThumbnailSize;
    high: ContentThumbnailSize;
    standard: ContentThumbnailSize;
    maxres: ContentThumbnailSize;
}
interface Localized {
    title: string;
    description: string;
}
interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnail;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage?: string;
    localized: Localized;
    defaultAudioLanguage: string;
}
interface Id {
    kind: string;
    videoId: string;
}
interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface Content {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
    statistics: Statistics;
}

export interface ContentList {
    kind: string;
    etag: string;
    pageInfo: PageInfo;
    items: Content[];
}
