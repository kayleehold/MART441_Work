$(document).ready(function() {
    // Function to load JSON and display data
    function loadJSON() {
        $.ajax({
            url: './json/AnimeData.json', // Path to JSON file
            dataType: 'json',
            success: function(data) {
                displayData(data);
            },
            error: function() {
                alert("Error loading data.");
            }
        });
    }

    // Function to display anime data in a table
    function displayData(data) {
        let tableBody = $("#animeTable tbody");
        tableBody.empty(); // Clear existing data

        data.forEach(function(anime) {
            let genres = anime.genres.length ? anime.genres.join(", ") : "N/A";
            let row = `<tr>
                        <td><a href="${anime.title.link}" target="_blank">${anime.title.text}</a></td>
                        <td>${anime.studio}</td>
                        <td>${genres}</td>
                        <td class="hype">${anime.hype}</td>
                        <td>${anime.start_date}</td>
                        <td>${anime.description.substring(0, 100)}...</td>
                    </tr>`;
            tableBody.append(row);
        });
    }

    // jQuery Plugin to highlight anime with hype above a certain value
    $.fn.highlightHype = function(threshold) {
        this.find("tr").each(function() {
            let hypeValue = parseInt($(this).find(".hype").text());
            if (hypeValue > threshold) {
                $(this).addClass("highlight");
            } else {
                $(this).removeClass("highlight");
            }
        });
        return this;
    };

    // Event listener for filter button
    $("#applyFilter").click(function() {
        let threshold = $("#hypeFilter").val();
        $("#animeTable tbody").highlightHype(threshold);
    });

    // Load JSON on page load
    loadJSON();
});
