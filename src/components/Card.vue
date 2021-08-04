<template>
  <div class="card" :class="{'card-cover': mode === 'CardMode'}">
    <div class="card__cntr">
      <h3 class="card__tit">{{ cardData.Name }}</h3>
      <div class="card__info">
        <p class="card__tag">{{ cardData.City }}</p>
        <p class="card__town">
          <strong>{{ cardData.Town }}</strong>
        </p>
      </div>
      <p class="card__desc">{{ cardData.HostWords }}</p>
    </div>
    <figure class="card__inner">
      <img class="card__img" :src="cardData.PicURL" :alt="cardData.Name">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardData: {
      type: Object,
      require: true,
    },
    mode: {
      type: String,
      default: 'ListMode',
      require: false,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  padding: 1em;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #fff;
}

.card__cntr {
  order: 2;
  width: 70%;
}

.card__inner {
  position: relative;
  order: 1;
  width: 30%;
  margin-right: 2em;
  overflow: hidden;
}

.card__inner::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  display: block;
  width: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: background-color .7s;
}

.card__info {
  position: absolute;
  top: 0;
  right: 100%;
  font-size: .9em;
  text-align: center;
}

.card__tag {
  margin-left: -2em;
  color: #fff;
  background-color: #00A9D4;
}

.card__town {
  margin-top: 6px;
  margin-right: 12px;
  color: #666;
}

.card__tit {
  font-size: 1.875em;
}

.card__img {
  width: 100%;
  height: auto;
  vertical-align: bottom;
  transition: transform 1s;
}

.card__desc {
  display: -webkit-box;
  color: #666;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
}

/* hover */
.card:hover .card__img {
  transform: scale(1.3);
}

.card:hover .card__inner::after {
  background-color: rgba(0, 0, 0, 0);
}

/* mdeia query */
@media screen and (max-width: 414px) {
  .card {
    flex-direction: column;
  }
  .card__cntr {
    width: 100%;
  }

  .card__desc {
    -webkit-line-clamp: 2;
  }

  .card__inner {
    width: 100%;
    margin-right: 0;
  }

  .card__info {
    position: static;
    display: flex;
    margin-bottom: .75em;
  }

  .card__tag {
    padding: 0 3px;
    margin-left: 0;
    margin-right: 6px;
  }

  .card__town {
    margin-top: 0;
    margin-right: 0;
  }

}

/* cover */
.card-cover {
  overflow: hidden;
}

.card-cover .card__inner {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
}

.card-cover .card__inner::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  display: block;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .7));
}

.card-cover .card__cntr {
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  transform: translateY(70%);
  transition: transform .7s;
}

.card-cover .card__info {
  position: static;
  display: flex;
  order: 1;
}

.card-cover .card__town {
  margin-top: 0;
  margin-right: 0;
  color: #ddd;
  font-style: italic;
}

.card-cover .card__tag {
  padding: 0 3px;
  margin-left: 0;
  margin-right: 6px;
}

.card-cover .card__desc {
  order: 3;
  color: #fff;
}

.card-cover .card__tit {
  font-size: 1.3em;
  color: #fff;
  order: 2;
}

.card-cover .card__tit::after {
  content: "";
  display: block;
  width: 3em;
  margin-top: 8px;
  margin-bottom: 10px;
  border-bottom: 2px solid #fff;
}

/* hover */
.card-cover:hover .card__cntr {
  transform: translateY(0);
}

/* mdeia query */
@media screen and (max-width: 414px) {
  .card-cover .card__desc {
    -webkit-line-clamp: 3;
  }

  .card-cover .card__info {
    margin-bottom: 0;
  }

}

/* table */


</style>
