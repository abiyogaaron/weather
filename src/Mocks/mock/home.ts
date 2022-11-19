import { IForecastResponses, TSearchResponses } from '../../Interface/responses';
import { TResponseResolver } from '../types';

export const weatherResp: IForecastResponses = {
  'cod': '200',
  'message': 0,
  'cnt': 40,
  'list': [
    {
      'dt': 1668826800,
      'main': {
        'temp': 301.79,
        'feels_like': 305.27,
        'temp_min': 301.79,
        'temp_max': 302.74,
        'pressure': 1004,
        'sea_level': 1004,
        'grnd_level': 1003,
        'humidity': 71,
        'temp_kf': -0.95,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 4.55,
        'deg': 247,
        'gust': 6.21,
      },
      'visibility': 10000,
      'pop': 0.21,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-19 03:00:00',
    },
    {
      'dt': 1668837600,
      'main': {
        'temp': 303.41,
        'feels_like': 306.92,
        'temp_min': 303.41,
        'temp_max': 304.46,
        'pressure': 1004,
        'sea_level': 1004,
        'grnd_level': 1000,
        'humidity': 62,
        'temp_kf': -1.05,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 6.02,
        'deg': 256,
        'gust': 7.44,
      },
      'visibility': 10000,
      'pop': 0.32,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-19 06:00:00',
    },
    {
      'dt': 1668848400,
      'main': {
        'temp': 302.52,
        'feels_like': 305.35,
        'temp_min': 302.52,
        'temp_max': 302.52,
        'pressure': 1005,
        'sea_level': 1005,
        'grnd_level': 999,
        'humidity': 63,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 6.32,
        'deg': 253,
        'gust': 8.16,
      },
      'visibility': 10000,
      'pop': 0.25,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-19 09:00:00',
    },
    {
      'dt': 1668859200,
      'main': {
        'temp': 299.83,
        'feels_like': 301.69,
        'temp_min': 299.83,
        'temp_max': 299.83,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1001,
        'humidity': 73,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 5.06,
        'deg': 244,
        'gust': 8.77,
      },
      'visibility': 10000,
      'pop': 0.17,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-19 12:00:00',
    },
    {
      'dt': 1668870000,
      'main': {
        'temp': 299.01,
        'feels_like': 299.64,
        'temp_min': 299.01,
        'temp_max': 299.01,
        'pressure': 1009,
        'sea_level': 1009,
        'grnd_level': 1003,
        'humidity': 76,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 92,
      },
      'wind': {
        'speed': 4.08,
        'deg': 229,
        'gust': 8.24,
      },
      'visibility': 10000,
      'pop': 0.1,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-19 15:00:00',
    },
    {
      'dt': 1668880800,
      'main': {
        'temp': 298.43,
        'feels_like': 299.1,
        'temp_min': 298.43,
        'temp_max': 298.43,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1001,
        'humidity': 80,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 92,
      },
      'wind': {
        'speed': 4.16,
        'deg': 236,
        'gust': 8.2,
      },
      'visibility': 10000,
      'pop': 0.13,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-19 18:00:00',
    },
    {
      'dt': 1668891600,
      'main': {
        'temp': 298.01,
        'feels_like': 298.64,
        'temp_min': 298.01,
        'temp_max': 298.01,
        'pressure': 1007,
        'sea_level': 1007,
        'grnd_level': 1001,
        'humidity': 80,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 98,
      },
      'wind': {
        'speed': 3.84,
        'deg': 234,
        'gust': 7.65,
      },
      'visibility': 10000,
      'pop': 0.13,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-19 21:00:00',
    },
    {
      'dt': 1668902400,
      'main': {
        'temp': 299.43,
        'feels_like': 299.43,
        'temp_min': 299.43,
        'temp_max': 299.43,
        'pressure': 1009,
        'sea_level': 1009,
        'grnd_level': 1002,
        'humidity': 74,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 84,
      },
      'wind': {
        'speed': 3.67,
        'deg': 223,
        'gust': 6.49,
      },
      'visibility': 10000,
      'pop': 0.13,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-20 00:00:00',
    },
    {
      'dt': 1668913200,
      'main': {
        'temp': 303.71,
        'feels_like': 306.21,
        'temp_min': 303.71,
        'temp_max': 303.71,
        'pressure': 1009,
        'sea_level': 1009,
        'grnd_level': 1002,
        'humidity': 56,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 68,
      },
      'wind': {
        'speed': 4.96,
        'deg': 256,
        'gust': 6.79,
      },
      'visibility': 10000,
      'pop': 0.12,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-20 03:00:00',
    },
    {
      'dt': 1668924000,
      'main': {
        'temp': 305.59,
        'feels_like': 308.08,
        'temp_min': 305.59,
        'temp_max': 305.59,
        'pressure': 1006,
        'sea_level': 1006,
        'grnd_level': 1000,
        'humidity': 49,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 77,
      },
      'wind': {
        'speed': 6.18,
        'deg': 264,
        'gust': 7.36,
      },
      'visibility': 10000,
      'pop': 0.12,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-20 06:00:00',
    },
    {
      'dt': 1668934800,
      'main': {
        'temp': 302.96,
        'feels_like': 305.62,
        'temp_min': 302.96,
        'temp_max': 302.96,
        'pressure': 1005,
        'sea_level': 1005,
        'grnd_level': 998,
        'humidity': 60,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 6.02,
        'deg': 254,
        'gust': 8.09,
      },
      'visibility': 10000,
      'pop': 0.22,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-20 09:00:00',
    },
    {
      'dt': 1668945600,
      'main': {
        'temp': 300.18,
        'feels_like': 302.14,
        'temp_min': 300.18,
        'temp_max': 300.18,
        'pressure': 1007,
        'sea_level': 1007,
        'grnd_level': 1000,
        'humidity': 71,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 66,
      },
      'wind': {
        'speed': 4.84,
        'deg': 241,
        'gust': 8.41,
      },
      'visibility': 10000,
      'pop': 0.12,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-20 12:00:00',
    },
    {
      'dt': 1668956400,
      'main': {
        'temp': 299.16,
        'feels_like': 299.16,
        'temp_min': 299.16,
        'temp_max': 299.16,
        'pressure': 1009,
        'sea_level': 1009,
        'grnd_level': 1002,
        'humidity': 75,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03n',
        },
      ],
      'clouds': {
        'all': 45,
      },
      'wind': {
        'speed': 3.75,
        'deg': 229,
        'gust': 6.86,
      },
      'visibility': 10000,
      'pop': 0.07,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-20 15:00:00',
    },
    {
      'dt': 1668967200,
      'main': {
        'temp': 298.48,
        'feels_like': 299.08,
        'temp_min': 298.48,
        'temp_max': 298.48,
        'pressure': 1007,
        'sea_level': 1007,
        'grnd_level': 1001,
        'humidity': 77,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 66,
      },
      'wind': {
        'speed': 3.01,
        'deg': 224,
        'gust': 5.68,
      },
      'visibility': 10000,
      'pop': 0.01,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-20 18:00:00',
    },
    {
      'dt': 1668978000,
      'main': {
        'temp': 298,
        'feels_like': 298.55,
        'temp_min': 298,
        'temp_max': 298,
        'pressure': 1007,
        'sea_level': 1007,
        'grnd_level': 1000,
        'humidity': 77,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 98,
      },
      'wind': {
        'speed': 2.94,
        'deg': 223,
        'gust': 5.36,
      },
      'visibility': 10000,
      'pop': 0.02,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-20 21:00:00',
    },
    {
      'dt': 1668988800,
      'main': {
        'temp': 299.66,
        'feels_like': 299.66,
        'temp_min': 299.66,
        'temp_max': 299.66,
        'pressure': 1009,
        'sea_level': 1009,
        'grnd_level': 1002,
        'humidity': 68,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 74,
      },
      'wind': {
        'speed': 3.01,
        'deg': 225,
        'gust': 4.91,
      },
      'visibility': 10000,
      'pop': 0.02,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-21 00:00:00',
    },
    {
      'dt': 1668999600,
      'main': {
        'temp': 304.19,
        'feels_like': 306.03,
        'temp_min': 304.19,
        'temp_max': 304.19,
        'pressure': 1009,
        'sea_level': 1009,
        'grnd_level': 1003,
        'humidity': 51,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d',
        },
      ],
      'clouds': {
        'all': 24,
      },
      'wind': {
        'speed': 3.19,
        'deg': 246,
        'gust': 4.49,
      },
      'visibility': 10000,
      'pop': 0.01,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-21 03:00:00',
    },
    {
      'dt': 1669010400,
      'main': {
        'temp': 306.26,
        'feels_like': 308.82,
        'temp_min': 306.26,
        'temp_max': 306.26,
        'pressure': 1006,
        'sea_level': 1006,
        'grnd_level': 1000,
        'humidity': 47,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d',
        },
      ],
      'clouds': {
        'all': 45,
      },
      'wind': {
        'speed': 4.84,
        'deg': 269,
        'gust': 5.46,
      },
      'visibility': 10000,
      'pop': 0.06,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-21 06:00:00',
    },
    {
      'dt': 1669021200,
      'main': {
        'temp': 304.79,
        'feels_like': 307.56,
        'temp_min': 304.79,
        'temp_max': 304.79,
        'pressure': 1005,
        'sea_level': 1005,
        'grnd_level': 999,
        'humidity': 53,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d',
        },
      ],
      'clouds': {
        'all': 98,
      },
      'wind': {
        'speed': 5.82,
        'deg': 256,
        'gust': 5.92,
      },
      'visibility': 10000,
      'pop': 0.3,
      'rain': {
        '3h': 0.15,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-21 09:00:00',
    },
    {
      'dt': 1669032000,
      'main': {
        'temp': 301.1,
        'feels_like': 303.59,
        'temp_min': 301.1,
        'temp_max': 301.1,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1001,
        'humidity': 69,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n',
        },
      ],
      'clouds': {
        'all': 99,
      },
      'wind': {
        'speed': 4.73,
        'deg': 236,
        'gust': 7.26,
      },
      'visibility': 10000,
      'pop': 0.48,
      'rain': {
        '3h': 0.18,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-21 12:00:00',
    },
    {
      'dt': 1669042800,
      'main': {
        'temp': 299.8,
        'feels_like': 299.8,
        'temp_min': 299.8,
        'temp_max': 299.8,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1003,
        'humidity': 73,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 92,
      },
      'wind': {
        'speed': 3.38,
        'deg': 225,
        'gust': 5.48,
      },
      'visibility': 10000,
      'pop': 0.05,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-21 15:00:00',
    },
    {
      'dt': 1669053600,
      'main': {
        'temp': 298.91,
        'feels_like': 299.5,
        'temp_min': 298.91,
        'temp_max': 298.91,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1002,
        'humidity': 75,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 74,
      },
      'wind': {
        'speed': 2.55,
        'deg': 225,
        'gust': 4.19,
      },
      'visibility': 10000,
      'pop': 0.02,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-21 18:00:00',
    },
    {
      'dt': 1669064400,
      'main': {
        'temp': 298.32,
        'feels_like': 298.88,
        'temp_min': 298.32,
        'temp_max': 298.32,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1001,
        'humidity': 76,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 2.38,
        'deg': 214,
        'gust': 4.3,
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-21 21:00:00',
    },
    {
      'dt': 1669075200,
      'main': {
        'temp': 299.63,
        'feels_like': 299.63,
        'temp_min': 299.63,
        'temp_max': 299.63,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1003,
        'humidity': 70,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 93,
      },
      'wind': {
        'speed': 2.85,
        'deg': 215,
        'gust': 4.54,
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-22 00:00:00',
    },
    {
      'dt': 1669086000,
      'main': {
        'temp': 304.38,
        'feels_like': 306.15,
        'temp_min': 304.38,
        'temp_max': 304.38,
        'pressure': 1009,
        'sea_level': 1009,
        'grnd_level': 1003,
        'humidity': 50,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 53,
      },
      'wind': {
        'speed': 3.82,
        'deg': 247,
        'gust': 5.07,
      },
      'visibility': 10000,
      'pop': 0.01,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-22 03:00:00',
    },
    {
      'dt': 1669096800,
      'main': {
        'temp': 306.83,
        'feels_like': 308.8,
        'temp_min': 306.83,
        'temp_max': 306.83,
        'pressure': 1006,
        'sea_level': 1006,
        'grnd_level': 1000,
        'humidity': 43,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 60,
      },
      'wind': {
        'speed': 4.67,
        'deg': 262,
        'gust': 5.63,
      },
      'visibility': 10000,
      'pop': 0.05,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-22 06:00:00',
    },
    {
      'dt': 1669107600,
      'main': {
        'temp': 304.33,
        'feels_like': 307.16,
        'temp_min': 304.33,
        'temp_max': 304.33,
        'pressure': 1005,
        'sea_level': 1005,
        'grnd_level': 999,
        'humidity': 55,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 5.78,
        'deg': 250,
        'gust': 6.74,
      },
      'visibility': 10000,
      'pop': 0.11,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-22 09:00:00',
    },
    {
      'dt': 1669118400,
      'main': {
        'temp': 301.21,
        'feels_like': 303.16,
        'temp_min': 301.21,
        'temp_max': 301.21,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1002,
        'humidity': 64,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 4.76,
        'deg': 223,
        'gust': 7.68,
      },
      'visibility': 10000,
      'pop': 0.05,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-22 12:00:00',
    },
    {
      'dt': 1669129200,
      'main': {
        'temp': 299.7,
        'feels_like': 299.7,
        'temp_min': 299.7,
        'temp_max': 299.7,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1003,
        'humidity': 71,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 99,
      },
      'wind': {
        'speed': 3.44,
        'deg': 213,
        'gust': 5.65,
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-22 15:00:00',
    },
    {
      'dt': 1669140000,
      'main': {
        'temp': 298.96,
        'feels_like': 299.5,
        'temp_min': 298.96,
        'temp_max': 298.96,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1002,
        'humidity': 73,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 97,
      },
      'wind': {
        'speed': 2.68,
        'deg': 214,
        'gust': 4.28,
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-22 18:00:00',
    },
    {
      'dt': 1669150800,
      'main': {
        'temp': 298.43,
        'feels_like': 298.95,
        'temp_min': 298.43,
        'temp_max': 298.43,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1001,
        'humidity': 74,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 96,
      },
      'wind': {
        'speed': 2.85,
        'deg': 225,
        'gust': 5.01,
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-22 21:00:00',
    },
    {
      'dt': 1669161600,
      'main': {
        'temp': 299.61,
        'feels_like': 299.61,
        'temp_min': 299.61,
        'temp_max': 299.61,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1003,
        'humidity': 67,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 80,
      },
      'wind': {
        'speed': 3.06,
        'deg': 226,
        'gust': 5.17,
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-23 00:00:00',
    },
    {
      'dt': 1669172400,
      'main': {
        'temp': 303.92,
        'feels_like': 305.39,
        'temp_min': 303.92,
        'temp_max': 303.92,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1004,
        'humidity': 50,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 75,
      },
      'wind': {
        'speed': 3.78,
        'deg': 245,
        'gust': 4.84,
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-23 03:00:00',
    },
    {
      'dt': 1669183200,
      'main': {
        'temp': 306.78,
        'feels_like': 308.2,
        'temp_min': 306.78,
        'temp_max': 306.78,
        'pressure': 1007,
        'sea_level': 1007,
        'grnd_level': 1001,
        'humidity': 41,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 66,
      },
      'wind': {
        'speed': 5.2,
        'deg': 262,
        'gust': 6.61,
      },
      'visibility': 10000,
      'pop': 0.01,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-23 06:00:00',
    },
    {
      'dt': 1669194000,
      'main': {
        'temp': 305.39,
        'feels_like': 307.47,
        'temp_min': 305.39,
        'temp_max': 305.39,
        'pressure': 1006,
        'sea_level': 1006,
        'grnd_level': 999,
        'humidity': 48,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 82,
      },
      'wind': {
        'speed': 6.84,
        'deg': 261,
        'gust': 7.63,
      },
      'visibility': 10000,
      'pop': 0.06,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-23 09:00:00',
    },
    {
      'dt': 1669204800,
      'main': {
        'temp': 301.05,
        'feels_like': 303.5,
        'temp_min': 301.05,
        'temp_max': 301.05,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1002,
        'humidity': 69,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 84,
      },
      'wind': {
        'speed': 5.76,
        'deg': 246,
        'gust': 8.96,
      },
      'visibility': 10000,
      'pop': 0.08,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-23 12:00:00',
    },
    {
      'dt': 1669215600,
      'main': {
        'temp': 299.87,
        'feels_like': 301.76,
        'temp_min': 299.87,
        'temp_max': 299.87,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1004,
        'humidity': 73,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 93,
      },
      'wind': {
        'speed': 4.25,
        'deg': 231,
        'gust': 6.75,
      },
      'visibility': 10000,
      'pop': 0.12,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-23 15:00:00',
    },
    {
      'dt': 1669226400,
      'main': {
        'temp': 298.98,
        'feels_like': 299.63,
        'temp_min': 298.98,
        'temp_max': 298.98,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1002,
        'humidity': 77,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 72,
      },
      'wind': {
        'speed': 2.84,
        'deg': 225,
        'gust': 4.51,
      },
      'visibility': 10000,
      'pop': 0.04,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-23 18:00:00',
    },
    {
      'dt': 1669237200,
      'main': {
        'temp': 298.71,
        'feels_like': 299.33,
        'temp_min': 298.71,
        'temp_max': 298.71,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1002,
        'humidity': 77,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 99,
      },
      'wind': {
        'speed': 1.43,
        'deg': 209,
        'gust': 2.19,
      },
      'visibility': 10000,
      'pop': 0.04,
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2022-11-23 21:00:00',
    },
    {
      'dt': 1669248000,
      'main': {
        'temp': 299.89,
        'feels_like': 301.72,
        'temp_min': 299.89,
        'temp_max': 299.89,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1004,
        'humidity': 72,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 99,
      },
      'wind': {
        'speed': 1.7,
        'deg': 216,
        'gust': 2.16,
      },
      'visibility': 10000,
      'pop': 0.03,
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2022-11-24 00:00:00',
    },
  ],
  'city': {
    'id': 1627459,
    'name': 'Serpong',
    'coord': {
      'lat': -6.3366,
      'lon': 106.6923,
    },
    'country': 'ID',
    'population': 80193,
    'timezone': 25200,
    'sunrise': 1668810370,
    'sunset': 1668855070,
  },
};
export const searchResp: TSearchResponses = [
  {
    'name': 'Serpong',
    'lat': -6.3131287,
    'lon': 106.68073925095902,
    'country': 'ID',
    'state': 'Banten',
  },
  {
    'name': 'Serpong',
    'lat': -6.3203317,
    'lon': 106.6660022,
    'country': 'ID',
    'state': 'Banten',
  },
];

export const getSearchRes: TResponseResolver<TSearchResponses> = (_, res, ctx) => res(
  ctx.status(200),
  ctx.json(searchResp),
);
export const getSearchResErr: TResponseResolver<any> = (_, res, ctx) => res(
  ctx.status(400),
  ctx.json(undefined),
);

export const getForecasts: TResponseResolver<IForecastResponses> = (_, res, ctx) => res(
  ctx.status(200),
  ctx.json(weatherResp),
);
export const getForecastsErr: TResponseResolver<any> = (_, res, ctx) => res(
  ctx.status(400),
  ctx.json(undefined),
);
