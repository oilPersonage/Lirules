export enum ClaimStatusTypes {
  SUCCESS = 'SUCCESS',
  IN_PROGRESS = 'IN_PROGRESS',
  FAILED = 'FAILED',
}

export type GetClaimResponse = {
  status: keyof typeof ClaimStatusTypes; // Статус
  date: string; // Дата заявки
  organization_name?: string; // Наименование организации
  kpp?: string; // Кпп
  inn: string; // Инн
  ip_last_name: string; // Фамилия
  ip_first_name: string; // Имя
  ip_patronymic?: string; // Отчество
};
