/// <reference types="vite/client" />

const apiRoot = `${import.meta.env.VITE_API_ROOT ?? ''}`;

export const fetchApi = (resource: string, init?: RequestInit) =>
  fetch(`${apiRoot}${resource}`, {
    ...init,
    credentials: 'include',
  });

export const fetchJson = (resource: string, init?: RequestInit) =>
  fetchApi(resource, init).then((res) => res.json());
