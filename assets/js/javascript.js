 
                                (function () {
                                  const root = document.getElementById(
                                    "simple-swap-gallery-01"
                                  );
                                  const main = root.querySelector(".sg-main");
                                  const items =
                                    root.querySelectorAll(".sg-thumb img");

                                  function swap(img) {
                                    const tmpSrc = main.getAttribute("src");
                                    const tmpAlt = main.getAttribute("alt");
                                    main.classList.remove("ready");
                                    setTimeout(() => {
                                      main.setAttribute(
                                        "src",
                                        img.getAttribute("src")
                                      );
                                      main.setAttribute(
                                        "alt",
                                        img.getAttribute("alt")
                                      );
                                      img.setAttribute("src", tmpSrc);
                                      img.setAttribute("alt", tmpAlt);
                                      requestAnimationFrame(() =>
                                        main.classList.add("ready")
                                      );
                                    }, 60);
                                  }

                                  items.forEach((i) => {
                                    i.parentElement.addEventListener(
                                      "click",
                                      () => swap(i)
                                    );
                                    i.parentElement.addEventListener(
                                      "keydown",
                                      (e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault();
                                          swap(i);
                                        }
                                      }
                                    );
                                    i.parentElement.setAttribute(
                                      "tabindex",
                                      "0"
                                    );
                                  });
                                })();
                                
                                (function () {
                                  var slider = document.querySelector(
                                    ".testimonial-slider"
                                  );
                                  if (!slider) return;
                                  var stage =
                                    slider.querySelector(".testimonial-cards");
                                  var cards = Array.prototype.slice.call(
                                    stage.querySelectorAll(".testimonial-card")
                                  );
                                  if (!cards.length) return;

                                  var index = cards.findIndex(function (c) {
                                    return c.classList.contains("active");
                                  });
                                  if (index < 0) {
                                    index = 0;
                                    cards[0].classList.add("active");
                                  }

                                  function show(i) {
                                    cards.forEach(function (card, idx) {
                                      card.classList.toggle(
                                        "active",
                                        idx === i
                                      );
                                    });
                                  }

                                  var prevBtn = stage.querySelector(
                                    ".testimonial-arrow.prev"
                                  );
                                  var nextBtn = stage.querySelector(
                                    ".testimonial-arrow.next"
                                  );

                                  function onPrev() {
                                    index =
                                      (index - 1 + cards.length) % cards.length;
                                    show(index);
                                  }
                                  function onNext() {
                                    index = (index + 1) % cards.length;
                                    show(index);
                                  }

                                  if (prevBtn)
                                    prevBtn.addEventListener("click", onPrev);
                                  if (nextBtn)
                                    nextBtn.addEventListener("click", onNext);

                                  if (cards.length <= 1) {
                                    if (prevBtn) prevBtn.style.display = "none";
                                    if (nextBtn) nextBtn.style.display = "none";
                                  }

                                  show(index);
                                })();