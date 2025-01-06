export const handleTimeout = (timeout: number) => {

    const controller = new AbortController();

    setTimeout(() => {
        controller.abort();
    }, timeout)

    return controller;
}