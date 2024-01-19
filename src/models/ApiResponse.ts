class APIResponse {
    constructor() {
        this.errorMessages = [];
    }

    isSuccess: boolean = false;
    result: any | null = null;
    statusCode: number = 0; // You can use HttpStatusCode enum if you have it in your TypeScript code
    errorMessages: string[] = [];
}
