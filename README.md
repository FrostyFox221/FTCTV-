# FTCTV Второй экран

Android-приложение «Второй экран» для информационно-развлекательного канала FTCTV.

## Информация о приложении

| Параметр | Значение |
|---|---|
| **Название** | FTCTV Второй экран |
| **Package ID** | `tv.ftctv.secondscreen` |
| **Платформа** | Android (min SDK 24) |
| **Технология** | Capacitor + React + Vite |
| **Тема** | Фиолетовая (`#7C3AED` / `#4C1D95`) |

## Скачать APK

Последняя сборка: [`releases/ftctv-second-screen-v1.0-debug.apk`](releases/ftctv-second-screen-v1.0-debug.apk)

- **Версия:** 1.0 (debug)
- **Размер:** 7.8 MB
- **SHA-256:** `1acfa2375e5834ada2347a3501ba0ecee594894937f3e47162aa1da0bed80af9`

## Структура проекта

```
├── android/           # Android-проект (Capacitor)
├── capacitor.config.ts # Конфигурация Capacitor
├── releases/          # Готовые APK-файлы
└── README.md
```

## Сборка

### Требования
- Node.js 22+
- Java 21 (JDK)
- Android SDK (Platform 36, Build Tools 34.0.0)

### Команды
```bash
# Установить зависимости (из корня monorepo FTCTV-Creator-Hub)
pnpm install

# Собрать веб-бандл
cd artifacts/ftctv
PORT=5173 BASE_PATH="/" npm run build

# Синхронизировать с Android
npx cap sync android

# Собрать APK
cd android
./gradlew assembleDebug --no-daemon
```

APK будет в `android/app/build/outputs/apk/debug/app-debug.apk`
