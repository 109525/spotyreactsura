export function Carrusel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/rataBlanca2.jpg?alt=media&token=c476bcc5-7b29-46fb-991f-c9ef29a12386" class=" w-100" height="800" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/rataBlanca3.jpg?alt=media&token=edba4d54-efb8-4ee1-b99c-df16e42ae09a" class=" w-100" height="800" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/spotify-7bc7b.appspot.com/o/rataBlanca4.jpg.crdownload?alt=media&token=6ddb32dd-14f4-434f-b952-ba7341c0b71d" class=" w-100" height="800" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
