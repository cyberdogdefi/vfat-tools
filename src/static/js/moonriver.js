$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Moonriver Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Moonfarm                 ", `<a href="moonfarm"      >Various</a>`,"MOON        ","https://app.moonfarm.in"],
      ["Solarbeam                ", `<a href="solarbeam"     >Various</a>`,"SOLAR       ","https://solarbeam.io"],
      ["Moonkafe                 ", `<a href="moonkafe"      >Various</a>`,"KAFE        ","https://moon.kafe.finance"],
      ["MoonEngine               ", `<a href="moonengine"    >Various</a>`,"MOONENGINE  ","https://www.moonengine.info"],
      ["Bcharity                 ", `<a href="bcharity"      >Various</a>`,"GIVE        ","https://moongive.netlify.app"],
      ["MoonLake                 ", `<a href="moonlake"      >Various</a>`,"MOONLAKE    ","https://moonlake.finance"],
      ["FoxyFinance              ", `<a href="foxy"          >Various</a>`,"FOXY        ","https://moon.foxyfinance.co"],
      ["1Swap                    ", `<a href="1swap"         >Various</a>`,"1SWAP       ","https://1swap.fi"],
      ["ApolloSwap               ", `<a href="apollo"        >Various</a>`,"APOLLO      ","https://apolloswap.farm"],
      ["MoonWhale                ", `<a href="moonwhale"     >Various</a>`,"WHALE       ","https://whale.moonlake.finance"],
      ["LandSwap                 ", `<a href="landswap"      >Various</a>`,"LAND        ","https://landswap.app"],
      ["MoonBeach                ", `<a href="moonbeach"     >Various</a>`,"COCONUT     ","https://moonbeach.farm"],
      ["KogeFarm                 ", `<a href="koge"          >Various</a>`,"VARIOUS     ","https://kogefarm.io"],
      ["MoonFi                   ", `<a href="moonfi"        >Various</a>`,"VARIOUS     ","https://www.moofi.app"],
      ["Elk                      ", `<a href="elk"           >Various</a>`,"ELK         ","https://elk.finance"],
      ["Huckleberry              ", `<a href="huckleberry"   >Various</a>`,"FINN        ","https://www.huckleberry.finance"],
      ["Sushi                    ", `<a href="sushi"         >Various</a>`,"SUSHI/MOVR  ","https://app.sushi.com"],
      ["Nileriver                ", `<a href="nileriver"     >Various</a>`,"NIL         ","https://www.nileriver.finance"],
      ["RivrKitty                ", `<a href="rivrkitty"     >Various</a>`,"PAWS        ","https://www.rivrkitty.com"]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();

}
