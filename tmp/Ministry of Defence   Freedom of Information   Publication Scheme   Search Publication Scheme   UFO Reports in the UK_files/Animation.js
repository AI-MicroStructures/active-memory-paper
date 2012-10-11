
			var myControl = document.getElementById('ConsentToCookiesControl_ConsentMessagePanel');
			if(myControl != null)
			{
			myControl.style.visiblity = "hidden";
			myControl.style.display = "none";
			}
			
			function RevealConsent()
			{
			var myControl = document.getElementById('ConsentToCookiesControl_ConsentMessagePanel');
			if(myControl != null)
				{
				myControl.style.visibility = "visible";
				myControl.style.display="block";
				}
			}

			
			//setTimeout("RevealConsent()",1500);
			
		setTimeout("displayCookieContainter()",1500);

			
			
			function HidingConsent()
			{
			var myControl = document.getElementById('ConsentToCookiesControl_ConsentMessagePanel');
			if(myControl != null)
				{
					myControl.style.visibility = "hidden";
					myControl.style.display="none";
				}
			
			}

			
			function LoadWebtrendsFile()
			{
				var fileref = document.createElement("script");
				fileref.setAttribute("type","text/javascript");
				fileref.setAttribute("src","/defenceinternet/scripts/webtrends.js");
				if(typeof fileref!="undefinded")
				{
					document.getElementsByTagName("head")[0].appendChild(fileref);
				}
			}
			function displayCookieContainter()
			{
				var myControl = document.getElementById('ConsentToCookiesControl_ConsentMessagePanel');
				if(myControl != null)
				{
			
					var myPage = document.getElementById("page");
					var myClass = document.createAttribute("class");
					myClass.value="cookiemain";		
					var myDiv = document.createElement("div");
						myDiv.setAttributeNode(myClass);	
				
			
						myDiv.innerHTML = myControl.innerHTML ;
					if(myPage != null)
					{
						myPage.insertBefore(myDiv,myPage.childNodes[0]);
					}
			
			
			
				}
			}
			