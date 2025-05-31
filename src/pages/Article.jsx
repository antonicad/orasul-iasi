import React from "react";
import "./Article.css";
import { Link } from "react-router-dom"
import fb from "../assets/fb.webp";
import whatsapp from "../assets/wapp.png";
import logo from "../assets/logoip.png";
import ad1 from "../assets/spot-difference-dog.png";
import ad2 from "../assets/spot-difference-lamp.png";
import ad3 from "../assets/heinz-pour.png";
import ad4 from "../assets/banner.jpg";
import { useState, useEffect } from "react";
import AdBox from './AdBox';

const COOLDOWN_MINUTES = 10;


const Article = () => {
  const [showAd, setShowAd] = useState(true);
  const [minutesLeft, setMinutesLeft] = useState(null);
  const [isCooldown, setIsCooldown] = useState(false);

    useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
      const diffMs = Date.now() - parseInt(lastVisit, 10);
      const diffMinutes = Math.floor(diffMs / 60000);

      if (diffMinutes < COOLDOWN_MINUTES) {
        setIsCooldown(true);
        setMinutesLeft(COOLDOWN_MINUTES - diffMinutes);
      } else {
        setIsCooldown(false);
        localStorage.removeItem("lastVisit");
      }
    } else {
      // Prima vizită – salvează timestamp
      localStorage.setItem("lastVisit", Date.now().toString());
    }
  }, []);

  return (
    <>
     {isCooldown && (
      <div className="cooldown-div">
        <span>
        <h2>Chestionarul trebuie completat cât mai sincer.</h2>
        <p>Temporar nu mai poți citi articolul. <br></br> ~ {minutesLeft} minute</p>
        </span>
        <Link to="https://docs.google.com/forms/d/1O5Cn_4WluQAJ39c_4IisWq1nTLzow6SS4i5M8dozuys"><button>Către chestionar</button></Link>
        <span>
        <p>Mulțumesc pentru timpul acordat!</p>
        </span>
      </div>
      )}

      {!isCooldown && (
      <>
      <div className="navbar">
        <img src={logo}></img>
      </div>
      <div className="banner">
          <div className="header">
            <h1>Orașul Iași</h1>
            <p>written by Iulian Paraschiv • 30 May 2025</p>
          </div>
      </div>

      <div className="for-ad">
          <div className="share">
              Share:
              <img src={fb}></img>
              <img src={whatsapp}></img>
          </div>
        <div className="the-article">
          <div className="article-content">
            <p>
            Orașul Iași este al doilea cel mai mare centru universitar din țară, fiind un oraș cultural și cu o bogată istorie în spate. Acesta este principalul oraș al Regiunii Moldova, din România și se bucură de admirația turiștilor din țară, cât și din străinătate, datorită obiectivelor culturale, care prezintă interes pentru aceștia. Palatul Culturii, Universitatea „Alexandru Ioan – Cuza”, Grădin Botanică, Biblioteca Central – Universitară „Mihai Eminescu”, Râpa Galbenă sau Bojdeuca lui Ion Creangă, sunt doar câteva repere culturale care fac orașul să se situeze în preferințele vizitatorilor.
            </p>
            <span className="for-mobile">
            <AdBox src={ad4} alt="Reclama 1"/>
            </span>
            <p>
            Orașul Iași este situat pe râul Bahlui, afluentul Jijiei, care se varsă în râul Prut, fiind ca și multe alte orașe din lume, precum Roma, „orașul legendar al celor șapte coline”, și anume Cetățuia, Galata, Copou, Bucium, Șorogari, Repedea și Breazu. Unele dintre aceste coline au biserici remarcabile în vârf.<sup>1</sup>
            <br /><br />
            Străduțele mici dintre blocuri, înconjurate de verdele natural al copacilor, te fac să respiri aerul citadin și răcoros, în timp ce privești la clădirile înalte, construite încă din perioada comunistă. Dincolo de blocuri, se poate observa traficul intens și nerăbdător, cu sute de mașini care își fac loc la semafor. Magazinele de mai mici sau mari dimensiuni, mai colorate sau mai șterse, își așteaptă clienții. Câteva vârfuri de biserici se pot zări de după marile blocuri și redau speranța în credință.
            </p>
            <AdBox src={ad1} alt="Reclama 1" />
            <p>
            Pietonalul Ștefan Cel Mare, este una dintre cele mai tranzitate și primitoare străduțe din oraș. Înconjurată de magazine și căbănuțe ale comercianților prietenoși, redă strălucirea orașului și totodată instaurează starea de bine în trecători. Străduța face legătura cu o altă atracție principală a orașului, anume Palas Mall, locul cel mai iubit de elevi, studenți, tineri sau vârstnici. Palas-ul, situat în inima orașului, oferă doza de relaxare și stare de bine, datorită prezenței brandurilor numeroase de îmbrăcăminte și încălțăminte, a zonei de food court, cât și a zonei verzi, de lângă Palatul Culturii.
            <br /><br />
            Se spune că dacă arunci o piatră în Iași vei sparge geamul unei biserici. În ciuda faptului că comunismul a scos religia în afara legii, Iași este plin de biserici și mănăstiri. Majoritatea aparțin confesiunii ortodoxe răsăritene. Sunt decorate bogat și uneori înconjurate de grădini luxuriante. În timp ce te plimbi, imaginează-ți bisericile acum o sută de ani ca centre agricole, cu comunități de țărani; copacii cu fructe și terenurile din jurul bisericii susținute de clerici și maici.<sup>2</sup>
            </p>
            <AdBox src={ad2} alt="Reclama 2" />
            <p>
            Catedrala Mitropolitană din Iași reprezintă un alt reper cultural și încărcat de istorie, vizitat anual de persoane din toate colțurile lumii. Este o construcție monumentală din veacul al XIX-lea, construită pe locul unde s-au aflat temeliile a două biserici mai vechi: biserica Albă (sec. XV) şi biserica Stratenia (sec. XVII).<sup>3</sup>  Anual, pelerinii vin să viziteze Catedrala și să participe la Hramul Sfintei Cuvioase Parascheva, pe data de 14 octombrie. Cozi de enoriași stau și se roagă, așteptându-și rândul pentru a se închina la Sfântă.
            <br /><br />
            Parcul Copou, este un alt simbol al orașului, fiind cel mai vechi parc din Iași, cât și cel mai mare parc urban și din zona centrală a regiunii de nord a orașului. Parcul datează din prima jumătate a secolului al XIX-lea, amenajarea sa începând în anii 1833-1834 sub domnia lui Mihail Sturza și are o suprafață de aproximativ zece hectare.<sup>4</sup>  În centrul parcului este situat unul dintre cele mai vechi monumente din istoria modernă a țării, Obeliscul cu lei, ridicat după planurile lui Gheorghe Asachi în cinstea domnitorului moldovean și a puterilor suzerane și protectoare sub a căror influență se aflau Principatele Române.<sup>5</sup>  De altfel, parcul găzduiește simbolul poezii eminesciene, anume Parcul lui Eminescu, dar și un întreg muzeu dedicat poetului.
            <br /><br />
            Concluzionăm că orașul Iași oferă o diversitate culturală și istorică, pusă la dispoziția vizitatorilor. În Iași ve-ți găsi locuri primitoare, oameni prietenoși, o arhitectură de la clasic la modern, o natură vie și locuri în care vă ve-ți crea amintiri de poveste.
            <br /><br />
            Te așteptăm la Iași!
            </p>
            <AdBox src={ad3} alt="Reclama 3" />
            <br /><br />
            <div className="buton-chestionar">
              <Link to="https://docs.google.com/forms/d/1O5Cn_4WluQAJ39c_4IisWq1nTLzow6SS4i5M8dozuys">
                <button className="chestionar">
                  Completează chestionarul!
                </button>
              </Link>
            </div>

            <hr></hr>
            <div className="note-subsol">Note de subsol:<br />
            <sup>1</sup> Orașul Iași, <Link to="https://ro.wikivoyage.org/wiki/Ia%C8%99i">https://ro.wikivoyage.org/wiki/Ia%C8%99i</Link>, accesat pe data de 10.05.2025; <br />
            <sup>2</sup> Ibidem<br />
            <sup>3</sup> Catedrala Mitropolitană din Iași, <Link to="https://catedralamitropolitanaiasi.mmb.ro/istoria-catedralei-mitropolitane">https://catedralamitropolitanaiasi.mmb.ro/istoria-catedralei-mitropolitane</Link>, accesat pe data de 11.05.2025<br />
            <sup>4</sup> Parcul Copou, <Link to="https://ro.wikipedia.org/wiki/Parcul_Copou">https://ro.wikipedia.org/wiki/Parcul_Copou</Link>, accesat pe data de 11.05.2025;<br />
            <sup>5</sup> Parcul Copou, <Link to="https://culturainiasi.ro/parcul-copou/">https://culturainiasi.ro/parcul-copou/</Link>, accesat pe data de 11.05.2025;
            </div>

          </div>
        </div>

        {showAd && (
          <div className="first-ad">
            <button className="close-ad" onClick={() => setShowAd(true)}>×</button>
            <img src={ad4}></img>
          </div>
        )}
      </div>
      <div className="footer">
        <p>Website made by Antonică Denis - <Link to="mailto:antonica.deniscosmin@gmail.com">antonica.deniscosmin@gmail.com</Link></p>
      </div>
      </>
      )}
    </>
  );
};

export default Article;
