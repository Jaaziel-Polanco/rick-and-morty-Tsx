import { instance } from "./base.api";

const endPoint = 'character';

export const characters = {
    getAll: ({ page = 1 }: { page?: number }) => {
        return instance.get(endPoint, {
            params: {
                page
            }
        });
    },
    getById: ({ id }: { id: string | undefined }) => {
        return instance.get(`${endPoint}/${id}`);

    }
}