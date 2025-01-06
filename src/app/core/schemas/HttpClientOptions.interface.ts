export interface HttpClientOptions extends RequestInit {
    timeout?:number;
    signal?: AbortSignal;
}