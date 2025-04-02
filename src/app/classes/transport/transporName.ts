export type transporName = 'Лодка' | 'Катер' | 'Пором';
export type transporNameMap = {
    [key: string]: transporName;
};

export const transporNameMap: transporNameMap = {
    Kater: 'Катер',
    Lodka: 'Лодка',
    Porom: 'Пором',
};