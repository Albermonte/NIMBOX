import { FiatApiSupportedCryptoCurrency, FiatApiSupportedFiatCurrency } from "@nimiq/utils";

export enum SupportedCurrencies {
    NIM = FiatApiSupportedCryptoCurrency.NIM,
    EUR = FiatApiSupportedFiatCurrency.EUR,
    USD = FiatApiSupportedFiatCurrency.USD,
}