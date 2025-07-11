# Weather & Population Info App
Приложение предоставляет актуальные данные о погоде в любом городе по запросу пользователя. Кроме того, оно отображает информацию о стране, где расположен этот город, включая численность населения страны. 

![view GIF](./video.gif)

## Технологии

- React 
    
- TypeScript
    
- Vite (сборщик)
    
- Axios (HTTP-клиент)
    
- API Weatherstack для погоды
    
- API Ninjas для данных о населении
## Функционал

- Ввод города через текстовое поле
    
- Запуск поиска по кнопке или нажатию Enter
    
- Отображение информации о погоде: описание, температура, иконка
    
- Отображение численности населения страны
    
- Обработка ошибок и индикация загрузки
## Установка и запуск
Клонируйте репозиторий:
```bash
git clone https://github.com/TahmazovAziz/Weather-Population-Info-App.git
cd VortexGeo
```
Установите зависимости:
```bash
npm install
```
Создайте файл `.env` в корне проекта и добавьте API-ключи:
```env
VITE_WEATHERSTACK_API_KEY=ваш_ключ_от_weatherstack
VITE_API_NINJAS_KEY=ваш_ключ_от_api_ninjas
```
Запустите проект:
```bash
npm run dev
```
Откройте в браузере `http://localhost:5173` (порт может отличаться)
## Структура проекта

- `src/App.tsx` — главный компонент с логикой запроса и отображения данных
    
- `src/Component/Input/Input.tsx` — компонент поля ввода
    
- `src/Component/Button/Button.tsx` — кнопка запуска поиска
    
- `src/Component/InfoBlock/InfoBlock.tsx` — блок с отображением информации о погоде и населении
