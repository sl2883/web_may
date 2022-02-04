import requests

headers = {
    'X-CleverTap-Account-Id': '464-49W-WR6Z',
    'X-CleverTap-Passcode': 'AMA-AUE-YWUL',
    'Content-Type': 'application/json',
}

params = (
    ('email', 'george.montana1@clevertap.com'),
)

response = requests.get('https://api.clevertap.com/1/profile.json', headers=headers, params=params)