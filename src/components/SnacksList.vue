<template>
  <div class="snacks" :class="getSnacksModeClass">
    <ul
      class="snacks__ls"
      v-if="mode === 'ListMode' || mode === 'CardMode'"
    >
      <li class="snacks__li" v-for="(item, index) in cardData" :key="index">
        <Card :mode="mode" :card-data="item"/>
      </li>
    </ul>
    <div class="snacks__table" v-else-if="mode === 'TableMode'">
      <ListTable :card-data-list="cardData"/>
    </div>
  </div>
</template>

<script>
import Card from './Card';
import ListTable from './ListTable';

export default {
  name: 'SnacksList',
  data() {
    return {
      mode: 'TableMode',
      cardData: [],
    };
  },
  created() {
    this.getData();
    this.$bus.$on('changeMode', (mode) => { this.mode = mode; });
  },
  methods: {
    getData() {
      // const api = '';
      // fetch(api)
      //   .then(res => res.json())
      //   .then((data) => { this.cardData = data; })
      //   .catch((err) => { console.error(err); });
      this.cardData = [
        {
          Name: '湖莓宴餐坊',
          HostWords: '湖苺宴開在大湖酒莊的4樓，是大湖地區農會經營的田媽媽餐坊，但是不同於一般田園風格的田媽媽主題餐廳，主打草莓創意料理的湖苺宴，裝潢、菜色都充滿年輕想法，一群六年級中段班的田媽媽，把她們對草莓的奇思異想，充份發揮在料理上。 餐廳所供的菜色會依季節不同做更換，皆以套餐為主，在草莓產季菜單有德國烤豬腳酌草莓醋酸菜、草莓魚排酌草莓酸辣醬等，另外，這裡的意大利麵可是別處吃不到的哦！因為田媽媽們在麵條中加入了草莓，遊客吃了會有驚豔之感哦！ 若是水梨產季，則推出水梨風味套餐，其中「水梨磨菇里肌肉餐」餐點以新鮮的水梨加上鮮嫩多汁的里肌肉以燴飯的方式呈現，讓您吃到水果的鮮甜及富有彈性的里肌肉，多層次的口感保證讓您回味無窮。',
          Url: '',
          City: '苗栗縣',
          Town: '三義鄉',
          PicURL: 'https://ezgo.coa.gov.tw/Uploads/opendata/TainmaMain01/APPLY_D/20151007173728.jpg',
          Address: '苗栗縣三義鄉廣盛村廣聲新城38鄰2巷26號',
        },
        {
          Name: '湖莓宴餐坊2',
          HostWords: '湖苺宴開在大湖酒莊的4樓，是大湖地區農會經營的田媽媽餐坊，但是不同於一般田園風格的田媽媽主題餐廳，主打草莓創意料理的湖苺宴，裝潢、菜色都充滿年輕想法，一群六年級中段班的田媽媽，把她們對草莓的奇思異想，充份發揮在料理上。 餐廳所供的菜色會依季節不同做更換，皆以套餐為主，在草莓產季菜單有德國烤豬腳酌草莓醋酸菜、草莓魚排酌草莓酸辣醬等，另外，這裡的意大利麵可是別處吃不到的哦！因為田媽媽們在麵條中加入了草莓，遊客吃了會有驚豔之感哦！ 若是水梨產季，則推出水梨風味套餐，其中「水梨磨菇里肌肉餐」餐點以新鮮的水梨加上鮮嫩多汁的里肌肉以燴飯的方式呈現，讓您吃到水果的鮮甜及富有彈性的里肌肉，多層次的口感保證讓您回味無窮。',
          Url: '',
          City: '苗栗縣',
          Town: '三義鄉',
          PicURL: 'https://ezgo.coa.gov.tw/Uploads/opendata/TainmaMain01/APPLY_D/20151007173728.jpg',
          Address: '苗栗縣三義鄉廣盛村廣聲新城38鄰2巷26號',
        },
        {
          Name: '湖莓宴餐坊3',
          HostWords: '湖苺宴開在大湖酒莊的4樓，是大湖地區農會經營的田媽媽餐坊，但是不同於一般田園風格的田媽媽主題餐廳，主打草莓創意料理的湖苺宴，裝潢、菜色都充滿年輕想法，一群六年級中段班的田媽媽，把她們對草莓的奇思異想，充份發揮在料理上。 餐廳所供的菜色會依季節不同做更換，皆以套餐為主，在草莓產季菜單有德國烤豬腳酌草莓醋酸菜、草莓魚排酌草莓酸辣醬等，另外，這裡的意大利麵可是別處吃不到的哦！因為田媽媽們在麵條中加入了草莓，遊客吃了會有驚豔之感哦！ 若是水梨產季，則推出水梨風味套餐，其中「水梨磨菇里肌肉餐」餐點以新鮮的水梨加上鮮嫩多汁的里肌肉以燴飯的方式呈現，讓您吃到水果的鮮甜及富有彈性的里肌肉，多層次的口感保證讓您回味無窮。',
          Url: '',
          City: '苗栗縣',
          Town: '三義鄉',
          PicURL: 'https://ezgo.coa.gov.tw/Uploads/opendata/TainmaMain01/APPLY_D/20151007173728.jpg',
          Address: '苗栗縣三義鄉廣盛村廣聲新城38鄰2巷26號',
        },
      ];
    },
  },
  computed: {
    getSnacksModeClass() {
      switch (this.mode) {
        case 'ListMode':
          return 'snacks-list';
        case 'CardMode':
          return 'snacks-card';
        case 'TableMode':
          return 'snacks-table';
        default:
          return '';
      }
    },
  },
  components: {
    Card,
    ListTable,
  },
};
</script>

<style>

.snacks__li {
  margin-bottom: 1em;
}

.snacks-card .snacks__ls {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.snacks-card .snacks__li {
  width: 49%;
}

/* media query */
@media screen and (max-width: 414px) {
  .snacks-card .snacks__li {
    width: 100%;
  }
}

</style>
