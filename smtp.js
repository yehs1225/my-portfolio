/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
const form = document.querySelector('#contact-form');
        const name = document.querySelector('#form-name');
        const subject = document.querySelector('#form-subject');
        const email = document.querySelector('#form-email');
        const msg = document.querySelector('#form-msg');
        const sendEmail=(e)=>{
                e.preventDefault();
                Email.send({
                SecureToken : "c6829a49-3b4c-47c6-b749-6551288286a8",
                To : 'yeh.mentos@gmail.com',
                From : 'yeh.mentos@gmail.com',
                Subject :subject.value,
                Body : 
                    `Mail from : ${email.value}<br>
                    Name : ${name.value}<br>
                    Message :${msg.value}
                    `,
                }).then(
                message => alert(message)
                );
        }
        form.addEventListener('submit',sendEmail);