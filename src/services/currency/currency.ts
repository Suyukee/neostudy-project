import axios from 'axios';
import { CurrencyName } from '@/components/currency-section/CurrencySectionTypes';

const BASE_URL = 'https://v6.exchangerate-api.com/v6/af5f06079ed41eca38533170/latest/RUB';

export const getCurrency = async (...currency: CurrencyName[]) => {
	const { data } = await axios.get(BASE_URL);
	const { conversion_rates, time_last_update_utc } = data;

	const timeUpdate = time_last_update_utc.split(' ').slice(1, 5).join(' ');

	const currencyData = currency.map((currencyName) => {
		return { name: currencyName, value: conversion_rates[currencyName].toFixed(2) };
	});

	return { currency: currencyData, timeUpdate };
};
