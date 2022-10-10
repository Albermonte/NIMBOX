import { client } from "nimiq-svelte-stores";
import type * as NimiqType from "@nimiq/core-web/types"

export const isValidCashlink = (cashlink: string): boolean => {
    if (!cashlink) return false;
    const regex = /(?<=\/cashlink\/#)(.{54,})(==)/
    return regex.test(cashlink);
}

export const getCashlinkBalance = async (cashlink: string): Promise<number> => {
    if (!cashlink) return 0;
    try {
        await client.waitForConsensusEstablished()
        const wallet = getWalletFromCashlink(cashlink);
        if (!wallet) return 0;
        const account = await client.getAccount(wallet.address);
        return account.balance / 1e5;
    } catch (e) {
        console.error('Error parsing Cashlink:', e);
        return 0;
    }
}

export const getWalletFromCashlink = (cashlink: string): NimiqType.Wallet | null => {
    if (!cashlink) return null;
    try {
        cashlink = cashlink.split("cashlink/#")[1].replace(/~/g, '').replace(/=*$/, (match) => new Array(match.length).fill('.').join(''));
        // @ts-ignore
        const buf = Nimiq.BufferUtils.fromBase64Url(cashlink);
        // @ts-ignore
        const keyPair = Nimiq.KeyPair.derive(Nimiq.PrivateKey.unserialize(buf));
        // @ts-ignore
        return new Nimiq.Wallet(keyPair);
    } catch (e) {
        console.error('Error parsing Cashlink:', e);
        return null;
    }
}