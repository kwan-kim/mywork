var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if ((navigator.appVersion.indexOf("MSIE 10") !== -1) || isIE11)
{
    document.querySelector('.ie10').style.display = "block"
}
