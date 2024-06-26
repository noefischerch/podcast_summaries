document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPodcast = urlParams.get('podcast');
    const podcastSelect = document.getElementById('podcastSelect');

    if (podcastSelect) {
        const option = podcastSelect.querySelector(`option[value="${selectedPodcast}"]`);
        if (option) {
            option.selected = true;
        } else {
            console.error('No option found for the given podcast value');
        }
    } else {
        console.error('Podcast select element not found');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchText = urlParams.get('query');
    const searchInput = document.querySelector('input[name="query"]');

    if (searchInput) {
        searchInput.value = searchText;
    } else {
        console.error('Search input element not found');
    }
});