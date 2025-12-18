import {myAxios} from "@/utils/useConfig.ts";
import type {CryptoItem} from "@/models/cryptoItem.ts";
import {useQuery} from "@tanstack/react-query";

const apiGetCrypto = async (): Promise<CryptoItem[]> => {
    const res = await myAxios.get<Record<string, Omit<CryptoItem, 'key'>>>(
        'currencyMapping'
    );

    return Object.entries(res.data).map(([key, val]) => ({
        key,
        ...val,
    }));
};

export const useCrypto = () => {
    return useQuery<CryptoItem[], Error>({
        queryKey: ["cryptos"],
        queryFn: apiGetCrypto,
    });
};