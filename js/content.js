var _0x2ed29e = _0xcd1f;

function _0x4476() {
    var _0xa4beee = ['type', '8Svybpo', '/accounts/emailsignup/', 'button', 'getElementsByTagName', 'innerHTML', 'POST', 'same-origin', 'email_confirmation_code', 'json', 'web.instagram.com', 'ready', 'input', 'email', 'toLowerCase', 'runtime', 'fullName', 'subject', 'https://www.instagram.com/accounts/login/ajax/', 'then', 'GET', 'www.instagram.com', '2644458SITLWn', 'username', 'change', '196148myoEme', 'Next', '495bbLwwn', 'catch', 'body', 'select', '7968169XjnaNx', 'submit', 'b8c933979c7b', '198387', 'match', 'location', 'title', '936619743392459', '4905400SKRYVz', 'nama', 'random', 'click', 'value', '112870HFFWTD', 'emailOrPhone', 'https://www.instagram.com/', 'pathname', 'getAttribute', 'length', 'csrf_token', '&username=', 'Selanjutnya', 'strict-origin-when-cross-origin', 'enc_password=#PWD_INSTAGRAM_BROWSER:0:1655279838:', 'getElementsByName', '*/*', '\x22\x20Not\x20A;Brand\x22;v=\x2299\x22,\x20\x22Chromium\x22;v=\x22102\x22,\x20\x22Google\x20Chrome\x22;v=\x22102\x22', 'status', 'floor', 'mail_result', '8724ihcPEP', '68ajjqhN', 'host', '0123456789abcdefghiklmnopqrstuvwxyz', '119ZJdvMC', 'dispatchEvent', '581496ydIucb', 'application/x-www-form-urlencoded', 'session_id', 'empty', 'Year:', 'sendMessage', 'Tahun:'];
    _0x4476 = function() {
        return _0xa4beee;
    };
    return _0x4476();
}(function(_0xae23f, _0x158c85) {
    var _0x2fc7a2 = _0xcd1f,
        _0x367558 = _0xae23f();
    while (!![]) {
        try {
            var _0x5e2c36 = -parseInt(_0x2fc7a2(0xe5)) / 0x1 * (-parseInt(_0x2fc7a2(0xcd)) / 0x2) + -parseInt(_0x2fc7a2(0xbf)) / 0x3 * (parseInt(_0x2fc7a2(0xc0)) / 0x4) + -parseInt(_0x2fc7a2(0xf3)) / 0x5 + -parseInt(_0x2fc7a2(0xe2)) / 0x6 + -parseInt(_0x2fc7a2(0xc3)) / 0x7 * (-parseInt(_0x2fc7a2(0xc5)) / 0x8) + parseInt(_0x2fc7a2(0xe7)) / 0x9 * (-parseInt(_0x2fc7a2(0xf8)) / 0xa) + parseInt(_0x2fc7a2(0xeb)) / 0xb;
            if (_0x5e2c36 === _0x158c85) break;
            else _0x367558['push'](_0x367558['shift']());
        } catch (_0x24f98f) {
            _0x367558['push'](_0x367558['shift']());
        }
    }
}(_0x4476, 0x9f53e));
var email_tmp = '',
    pass = 'JANCOK123';
$(document)[_0x2ed29e(0xd7)](function() {
    var _0x4118f6 = _0x2ed29e;
    if (window[_0x4118f6(0xf0)][_0x4118f6(0xc1)] == _0x4118f6(0xe1) || window['location'][_0x4118f6(0xc1)] == _0x4118f6(0xd6)) {
        window[_0x4118f6(0xf0)][_0x4118f6(0xfb)] == _0x4118f6(0xce) && setTimeout(function() {
            get_mail_nama();
        }, 0x1f4);
        var _0x5b19bd = setInterval(function() {
            var _0x2d1333 = _0x4118f6;
            (document['body'][_0x2d1333(0xd1)][_0x2d1333(0xef)](/Sorry, something went wrong/) || document[_0x2d1333(0xe9)][_0x2d1333(0xd1)][_0x2d1333(0xef)](/Sorry! We're having trouble/)) && (clearInterval(_0x5b19bd), form_login());
        }, 0x3e8);
    }
});

function rand(_0x13ca9f, _0x30f49d) {
    var _0x5dd25d = _0x2ed29e;
    return Math['floor'](Math[_0x5dd25d(0xf5)]() * (_0x30f49d - _0x13ca9f)) + _0x13ca9f;
}

function _0xcd1f(_0x250ee8, _0x371236) {
    var _0x447628 = _0x4476();
    return _0xcd1f = function(_0xcd1f91, _0x8370de) {
        _0xcd1f91 = _0xcd1f91 - 0xb4;
        var _0x1094d7 = _0x447628[_0xcd1f91];
        return _0x1094d7;
    }, _0xcd1f(_0x250ee8, _0x371236);
}

function randomString() {
    var _0xd61884 = _0x2ed29e,
        _0xcc7d08 = _0xd61884(0xc2),
        _0x41395e = '';
    for (var _0xfce801 = 0x0; _0xfce801 < 0x8; _0xfce801++) {
        var _0x1183db = Math[_0xd61884(0xbd)](Math[_0xd61884(0xf5)]() * _0xcc7d08[_0xd61884(0xfd)]);
        _0x41395e += _0xcc7d08[_0x1183db];
    }
    return _0x41395e;
}
var get_mail_nama = function() {
        chrome['runtime']['sendMessage']({
            'call': 'get_mail_nama'
        }, function(_0x4ee8c3) {
            var _0x251f3a = _0xcd1f;
            if (_0x4ee8c3['status'] == 'OK') {
                email_tmp = _0x4ee8c3[_0x251f3a(0xd9)];
                var _0x20e6df = _0x4ee8c3['email'],
                    _0x42f95f = _0x4ee8c3[_0x251f3a(0xc7)],
                    _0x3eb1b1 = _0x4ee8c3[_0x251f3a(0xf4)][_0x251f3a(0xda)](),
                    _0x2760a7 = document['getElementsByName'](_0x251f3a(0xf9))[0x0];
                _0x2760a7[_0x251f3a(0xf7)] = _0x20e6df, _0x2760a7[_0x251f3a(0xc4)](new Event(_0x251f3a(0xd8), {
                    'bubbles': !![]
                }));
                var _0x1cdf5f = document[_0x251f3a(0xb9)](_0x251f3a(0xdc))[0x0];
                _0x1cdf5f[_0x251f3a(0xf7)] = _0x3eb1b1, _0x1cdf5f[_0x251f3a(0xc4)](new Event(_0x251f3a(0xd8), {
                    'bubbles': !![]
                }));
                var _0x395cba = document['getElementsByName'](_0x251f3a(0xe3))[0x0];
                _0x395cba[_0x251f3a(0xf7)] = randomString(), _0x395cba[_0x251f3a(0xc4)](new Event(_0x251f3a(0xd8), {
                    'bubbles': !![]
                }));
                var _0x395cba = document[_0x251f3a(0xb9)]('password')[0x0];
                _0x395cba[_0x251f3a(0xf7)] = pass, _0x395cba['dispatchEvent'](new Event('input', {
                    'bubbles': !![]
                })), setTimeout(function() {
                    var _0x4bd107 = _0x251f3a,
                        _0x11c47b = document[_0x4bd107(0xd0)]('button');
                    for (var _0x173d3a = 0x0; _0x173d3a < _0x11c47b[_0x4bd107(0xfd)]; _0x173d3a++) {
                        _0x11c47b[_0x173d3a][_0x4bd107(0xfc)](_0x4bd107(0xcc)) == _0x4bd107(0xec) && _0x11c47b[_0x173d3a][_0x4bd107(0xf6)]();
                    }
                    set_tgl_lahir();
                }, 0xc8), get_mail_code(_0x42f95f);
            }
        });
    },
    set_tgl_lahir = function() {
        var _0x532126 = setInterval(function() {
            var _0x5cad5c = _0xcd1f;
            if (document['getElementsByTagName'](_0x5cad5c(0xea))) {
                var _0x1cf835 = document['getElementsByTagName'](_0x5cad5c(0xea));
                for (var _0x2e9416 = 0x0; _0x2e9416 < _0x1cf835[_0x5cad5c(0xfd)]; _0x2e9416++) {
                    (_0x1cf835[_0x2e9416][_0x5cad5c(0xfc)](_0x5cad5c(0xf1)) == _0x5cad5c(0xcb) || _0x1cf835[_0x2e9416][_0x5cad5c(0xfc)](_0x5cad5c(0xf1)) == _0x5cad5c(0xc9)) && (clearInterval(_0x532126), _0x1cf835[_0x2e9416][_0x5cad5c(0xf7)] = '2000', _0x1cf835[_0x2e9416][_0x5cad5c(0xc4)](new Event(_0x5cad5c(0xe4), {
                        'bubbles': !![]
                    })), setTimeout(function() {
                        var _0x1f90ad = _0x5cad5c,
                            _0x14c33e = document[_0x1f90ad(0xd0)](_0x1f90ad(0xcf));
                        for (var _0x9f282d = 0x0; _0x9f282d < _0x14c33e[_0x1f90ad(0xfd)]; _0x9f282d++) {
                            (_0x14c33e[_0x9f282d][_0x1f90ad(0xfc)](_0x1f90ad(0xcc)) == _0x1f90ad(0xcf) && _0x14c33e[_0x9f282d]['innerHTML'] == _0x1f90ad(0xb6) || _0x14c33e[_0x9f282d]['getAttribute'](_0x1f90ad(0xcc)) == _0x1f90ad(0xcf) && _0x14c33e[_0x9f282d][_0x1f90ad(0xd1)] == _0x1f90ad(0xe6)) && _0x14c33e[_0x9f282d][_0x1f90ad(0xf6)]();
                        }
                    }, 0xc8));
                }
            }
        }, 0x3e8);
    };

function get_mail_code(_0x37bfa7) {
    var _0x4ef259 = 0x0,
        _0xbdb4a3 = setInterval(function() {
            var _0x10486a = _0xcd1f;
            _0x4ef259 < 0x19 && (_0x4ef259++, chrome[_0x10486a(0xdb)][_0x10486a(0xca)]({
                'call': 'get_mail_code',
                'session_id': _0x37bfa7
            }, function(_0x30b995) {
                var _0x4dc83f = _0x10486a;
                if (_0x30b995[_0x4dc83f(0xbc)] == 'OK') {
                    var _0x1f0a0a = _0x30b995[_0x4dc83f(0xbe)];
                    if (_0x1f0a0a[_0x4dc83f(0xfd)] > 0x1) {
                        clearInterval(_0xbdb4a3);
                        var _0x45d7c6 = _0x1f0a0a[0x0][_0x4dc83f(0xdd)],
                            _0x3a6e98 = _0x45d7c6[_0x4dc83f(0xef)](/\d+/)[0x0],
                            _0x295acf = document[_0x4dc83f(0xb9)](_0x4dc83f(0xd4))[0x0];
                        _0x295acf['value'] = _0x3a6e98, _0x295acf[_0x4dc83f(0xc4)](new Event('input', {
                            'bubbles': !![]
                        }));
                    }
                }
            }));
        }, 0x7d0);
}
var form_login = function() {
    var _0x507275 = _0x2ed29e;
    fetch('https://www.instagram.com/data/shared_data/', {
        'body': null,
        'method': _0x507275(0xe0)
    })[_0x507275(0xdf)](_0x46b92d => {
        var _0x5461bd = _0x507275;
        return _0x46b92d[_0x5461bd(0xd5)]();
    })[_0x507275(0xdf)](_0x4a78b7 => {
        var _0x401d3d = _0x507275,
            _0x3e5764 = _0x4a78b7['config'][_0x401d3d(0xb4)];
        fetch(_0x401d3d(0xde), {
            'headers': {
                'accept': _0x401d3d(0xba),
                'accept-language': 'en-US,en;q=0.9',
                'content-type': _0x401d3d(0xc6),
                'sec-ch-ua': _0x401d3d(0xbb),
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '\x22Windows\x22',
                'sec-fetch-dest': _0x401d3d(0xc8),
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': _0x401d3d(0xd3),
                'x-asbd-id': _0x401d3d(0xee),
                'x-csrftoken': _0x3e5764,
                'x-ig-app-id': _0x401d3d(0xf2),
                'x-ig-www-claim': '0',
                'x-instagram-ajax': _0x401d3d(0xed),
                'x-requested-with': 'XMLHttpRequest'
            },
            'referrer': 'https://www.instagram.com/accounts/login/?source=auth_switcher',
            'referrerPolicy': _0x401d3d(0xb7),
            'body': _0x401d3d(0xb8) + pass + _0x401d3d(0xb5) + email_tmp + '&queryParams={\x22source\x22:\x22auth_switcher\x22}&optIntoOneTap=false&stopDeletionNonce=&trustedDeviceRecords={}',
            'method': _0x401d3d(0xd2),
            'mode': 'cors',
            'credentials': 'include'
        })[_0x401d3d(0xdf)](_0x56fc05 => {
            var _0x1ad120 = _0x401d3d;
            window[_0x1ad120(0xf0)] = 'https://www.instagram.com/';
        })[_0x401d3d(0xe8)](_0x987673 => {
            var _0x3cbed4 = _0x401d3d;
            window[_0x3cbed4(0xf0)] = _0x3cbed4(0xfa);
        });
    })[_0x507275(0xe8)](_0x33f221 => {
        var _0x2ebffd = _0x507275;
        window[_0x2ebffd(0xf0)] = _0x2ebffd(0xfa);
    });
};