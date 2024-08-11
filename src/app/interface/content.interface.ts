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

interface SearchContent {
    kind: string;
    etag: string;
    id: Id;
}
export interface Content extends Omit<SearchContent, 'id'> {
    snippet: Snippet;
    statistics: Statistics;
    id: string;
}

export interface ContentList<T = Content> {
    kind: string;
    etag: string;
    pageInfo: PageInfo;
    items: T[];
}

export interface SearchList<T = SearchContent> extends ContentList<T> {
    regionCode: string;
    nextPageToken: string;
}
