import Flickr from 'flickr-sdk'

const api_key = '6b3575d10435de5f010fc941f5eff94a'

const flickr = new Flickr(api_key)

export default function searchImages(searchText, perPage, page) {
    return new Promise((resolve, reject) => {
        flickr.photos.search({
            text: searchText,
            per_page: perPage,
            page: page
        }).then(function (res) {
            resolve(res.body.photos);
        }).catch(function (err) {
            reject(err);
        });
    })
}
