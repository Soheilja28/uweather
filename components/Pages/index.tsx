import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import * as moment from 'moment-jalaali';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "اخبار هواشناسی شیراز"

  return (

    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{ minHeight: 550, margin: 10, width: "calc(100% - 20px)", background: "linear-gradient(to right, #2973FD 0 10%, #49A1F3 30% 60%, #41DAFC 90% 100%)" }}>

        {/* عکس بک گراند */}
        <div>
          <div style={{ float: "right" }}>

            <img style={{
              width: "880px",
              height: "480px",
              marginRight: "22px",
              marginTop: "22px",
              borderRadius: "25px",
              filter: "blur(1px)"
            }} src='/images3.jpg' alt='hi' />

          </div>

          {/* --------------------------------------------------------------------------------------------- */}

          {/* دیو پایین سمت چپ */}
          <div style={{
            width: "450px",
            height: "300px",
            backgroundColor: "deepskyblue",
            position: "absolute",
            marginRight: "420px",
            marginTop: "170px",
            borderRadius: "20px",
            opacity: "0.8",
            boxShadow: "0 0 10px rgb(0 0 0)"
          }}>
            
            {/* --------- */}
            <div style={{
              float: "left",
              position: "absolute"
            }}>
              <img style={{
                width: "100px",
                height: "100px",
                marginRight: "300px",
                marginTop: "27px"
              }} src='/sunrise-alt.png' />
            </div>

            <div style={{
              float: "left",
              position: "absolute"
            }}>
              <img style={{
                width: "100px",
                height: "100px",
                marginRight: "165px",
                marginTop: "27px"
              }} src='/sunset.png' />
            </div>

            {/* --------- */}
            <div style={{
              position: "absolute",
              paddingRight: "325px",
              marginTop: "135px"
            }}>
              {(props.weather.sunrise)}
            </div>

            <div style={{
              position: "absolute",
              paddingRight: "190px",
              marginTop: "135px"
            }}>
              {(props.weather.sunset)}
            </div>

            {/* ---------- */}
            <div style={{
              position: "absolute",
              paddingRight: "40px",
              paddingTop: "2px",
              paddingBottom: "2px",
              marginTop: "180px",
              backgroundColor: "lightblue",
              marginRight: "50px",
              paddingLeft: "27px",
              borderRadius: "5px"
            }}>

              <span style={{
                color: "indigo",
                fontSize: "15px"
              }}>🌀 سرعت باد</span> <span style={{
                paddingRight: "100px",
                color: "blue"
              }}>{(props.current_condition.windspeedKmph)}</span><span style={{ paddingRight: "20px" }}>کیلومتر بر ساعت</span>
            </div>

            <div style={{
              position: "absolute",
              paddingRight: "40px",
              paddingTop: "2px",
              paddingBottom: "2px",
              marginTop: "220px",
              backgroundColor: "lightblue",
              marginRight: "50px",
              paddingLeft: "55px",
              borderRadius: "5px"
            }}>

              <span style={{
                color: "indigo",
                fontSize: "15px"
              }}>🌧️ میزان بارندگی</span> <span style={{
                paddingRight: "80px",
                color: "blue"
              }}>{(props.current_condition.precipMM)}</span><span style={{ paddingRight: "20px" }}>میلی متر</span>
            </div>

            <div style={{
              position: "absolute",
              paddingRight: "40px",
              paddingTop: "2px",
              paddingBottom: "2px",
              marginTop: "260px",
              backgroundColor: "lightblue",
              marginRight: "50px",
              paddingLeft: "75px",
              borderRadius: "5px"
            }}>

              <span style={{
                color: "indigo",
                fontSize: "15px"
              }}>💧 میزان رطوبت</span> <span style={{
                paddingRight: "85px",
                color: "blue"
              }}>{(props.current_condition.humidity)}</span><span style={{
                paddingRight: "20px"
              }}>درصد</span>
            </div>


          </div>

          {/* ------------------------------------------------------------------------------------------------- */}

          {/* دیو بالا سمت راست */}
          <div style={{
            width: "500px",
            height: "270px",
            backgroundColor: "blue",
            position: "absolute",
            marginRight: "60px",
            marginTop: "55px",
            borderRadius: "20px",
            opacity: "1",
            boxShadow: "0 0 10px rgb(0 0 0)"
          }}>

            <div style={{
              float: "left",
              position: "absolute"
            }}>
              <img style={{
                width: "200px",
                height: "200px",
                marginRight: "280px",
                marginTop: "33px"
              }} src='/images1.jpg' />
            </div>

            <div style={{
              marginTop: "15px",
              paddingRight: "25px",
              color: "lightgray",
              fontSize: "30px"
            }}>
              Iran | Fars | <span style={{ color: "yellow" }}>shiraz</span>📌
            </div>

            <div style={{
              float: "left",
              position: "absolute",
              marginTop: "20px",
              paddingRight: "70px",
              color: "white",
              fontSize: "70px"
            }}>
              /  {(props.current_condition.temp_C as number).toLocaleString("fa-IR")}°c
            </div>

            <div style={{
              float: "right",
              marginTop: "70px",
              paddingRight: "30px",
              color: "lightgray",
              fontSize: "20px"
            }}>
              {(props.current_condition.temp_F as number).toLocaleString("fa-IR")}°F
            </div>

            <div style={{
              marginTop: "130px",
              paddingRight: "30px",
              color: "lightgray",
              fontSize: "20px"
            }}>
              <span>وضعیت آب و هوایی</span> : <span style={{ color: "yellow" }}>🌤️آفتابی</span>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------------- */}


          {/* دیو تاریخ */}
          <div style={{
            width: "150px",
            height: "63px",
            backgroundColor: "greenyellow",
            position: "absolute",
            marginRight: "190px",
            marginTop: "290px",
            borderRadius: "20px"
          }}>

            <div style={{
              color: "purple",
              fontSize: "25px",
              paddingRight: "22px",
              marginTop: "5px"
            }}>
              {(props.shamsidate)}
            </div>

            <div style={{
              color: "purple",
              fontSize: "13px",
              paddingRight: "14px"
            }}>
              {(props.current_condition.localObsDateTime)}
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------- */}

        </div>

      </Window>
    </div>
  )
}

// #FFD400
export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


  let json = await (await fetch("https://cdn.ituring.ir/research/api/weather/")).json()
  let current_condition = json.current_condition[0]
  let weather = json.weather[0].astronomy[0]


  const miladidate = json.current_condition[0].localObsDateTime;
  const shamsidate = moment(miladidate, 'YYYY-MM-DD').locale('fa').format('jYYYY/jM/jD');

  return {
    props: {
      data: global.QSON.stringify({
        current_condition,
        weather,
        shamsidate,
        session,
        // nlangs,
      })
    },
  }
}
