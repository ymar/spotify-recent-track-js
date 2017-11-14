$(function () {

				var user = ""
				var apiKey = ""

				$.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=2&user=" + user + "&api_key=" + apiKey,
						function (response) { 
								var output = '';
								$(response).find('track:first').each(function () {
										var trackName = $(this).find('name').text(); //name of the track
										var artist = $(this).find('artist').text(); //artist
										var trackFinal = "";

										trackFinal += trackName + " - " + artist
										output += trackFinal;
								});
								output += "</ul>";
								$('#recent-track').html(output);
						},
						"xml"); //expecting XML as a response, could leave this blank
		}); //execute wrapper function with $ = jQuery
