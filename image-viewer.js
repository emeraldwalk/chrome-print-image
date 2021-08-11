/**
 * Script used in new tab to show image.
 */
const [, src] = location.search.split('=')
document.getElementById('img').src = src
print()
