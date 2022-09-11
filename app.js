const routes = {
	'/' : about,
	'about' : about,
	'portfolio' : portfolio,
	'3d' : d3d,
	'contact' : contact,
};

const onNavigate = (pathname) => {
	if(pathname == "/" || pathname == "about" || pathname == "contact" || pathname == "") {
		document.getElementById("navbar").style.minWidth="50vw"
		document.getElementById("content").style.width="50vw"
	} else {
		document.getElementById("navbar").style.minWidth="20vw"
		document.getElementById("content").style.width="80vw"
	}
	if(pathname != "/") window.history.pushState(
		{},
		"",
		window.location.href.split("#")[0] + "#" + pathname
	)
	if (pathname == "/") rootDiv.innerHTML = routes[pathname]
	else rootDiv.innerHTML = routes[pathname]
}

const rootDiv = document.getElementById("root");
if(window.location.href == "http://krlsn.xyz/") onNavigate(window.location.pathname)
else onNavigate(window.location.href.split("#")[1])
