import React from "react";
import "../index.css"
import * as moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');


class Calendar extends React.Component
{
    state =    {
        currentMonth: moment(),
        selectedDate: moment(),
        selDay: moment(),
        showNav: false,
        showDays: true,
        showMonth: true,
        showWeek:false,
        showMonthNav: true,
        showWeekNav:false,
        showAction: false,
        showAction2:false,
        showAction3:false
    };

    events = [
        {date:' 2019-01-23', title:"Burning Wizards", time:'00:00', text:"Lorem ipsum nunc ac"},
        {date:' 2019-02-16', title:"The Sacred Servants", time:"00:05", text:"Quisque"},
        {date:' 2019-03-03', title:"Mists of Person", time:"00:20", text:"Imperdiet sagittis donec"},
        {date:' 2019-03-13', title:"The Secrets's Heart", time:"01:10", text:"Dictum feugiat pretium"},
        {date:' 2019-03-19', title:"The Swords of the Lover", time:"01:40", text:"Lorem ipsum"},
        {date:' 2019-04-02', title:"Darkness in the Legend", time:"03:10", text:"Vehicula viverra blandit"},
        {date:' 2019-04-14', title:"Erect Wind", time:"03:50", text:"Amet"},
        {date:' 2019-05-04', title:"The Bloody Rings", time:"06:05", text:"Cras"},
        {date:' 2019-05-18', title:"Sorcerer of Slaves", text:"Torquent", time:"06:50"},
        {date:' 2019-05-20', title:"The Witches's Son", text:"At elit risus", time:"08:25"},
        {date:' 2019-06-02', title:"The Prophecy of the Bride", text:"Integer nostra", time:"08:45"},
        {date:' 2019-06-14', title:"Prince in the Heart", text:"Lacus netus tempus", time:"09:45"},
        {date:' 2019-06-25', title:"Captured Serpent", text:"Felis erat", time:"10:20"},
        {date:' 2019-07-09', title:"The White Girl", text:"Feugiat varius", time:"10:35"},
        {date:' 2019-07-10', title:"Tales of Magic", text:"Elementum", time:"11:10"},
        {date:' 2019-07-31', title:"The Man's Bridges", text:"Platea", time:"11:45"},
        {date:' 2019-08-31', title:"The Tale of the Kiss", text:"Tempus tristique fusce", time:"14:45"},
        {date:' 2019-09-05', title:"Girl in the Shards", text:"Quisque varius", time:"14:50"},
        {date:' 2019-09-16', title:"Lovely Soaring", text:"Sit", time:"15:40"},
        {date:' 2019-09-28', title:"The Prized Cloud", text:"Ante", time:"16:25"},
        {date:' 2019-10-04', title:"Butterfly of Stone", text:"Pulvinar cras", time:"17:05"},
        {date:' 2019-10-09', title:"The End's Thorns", text:"Dui sem", time:"18:25"},
        {date:' 2019-11-07', title:"The History of the Fire", text:"Tempus orci", time:"23:10"},
        {date:' 2019-11-10', title:"Kiss in the Mist", text:"Etiam", time:"23:50"}
    ];

    repeats = [
        {date:' 2019-01-23', title:"First Wife", time:'01:25', text:"Lorem"},
        {date:' 2019-02-16', title:"The Dangerous Obsession", time:"04:05", text:"Feugiat conubia"},
        {},
        {date:' 2019-03-13', title:"Princess of Flower", time:"04:10", text:"Porttitor mi"},
        {},
        {},
        {},
        {date:' 2019-05-04', title:"The Illusion's Game", time:"04:30", text:"Varius leo proin"},
        {},
        {date:' 2019-05-20', title:"The Lord of the Teacher", time:"14:30", text:"Torquent"},
        {date:' 2019-06-02', title:"Healer in the Illusion", time:"15:40", text:"Porta"},
        {},
        {},
        {},
        {date:' 2019-07-10', title:"All Shard", time:"16:15", text:"Odio consectetur condimentum"},
        {},
        {},
        {date:' 2019-09-05', title:"The Vacant Snake", time:"19:25", text:"Blandit"},
        {date:' 2019-09-16', title:"Ship of Door", time:"19:30", text:"Quisque mi"},
        {date:' 2019-09-28', title:"The Boyfriend's Spirits", time:"21:45", text:"Ligula suscipit"},
        {},
        {date:' 2019-10-09', title:"The Men of the Secrets", time:"21:55", text:"Class taciti pulvinar"},
        {date:' 2019-11-07', title:"Abyss in the Doors", time:"22:40", text:"Platea non"},
        {},
    ];

    repeats2 = [
        {date:' 2019-01-23', title:"Silvery Alien", time:'21:35', text:"Aliquam nisl"},
        {date:' 2019-02-16', title:"The Vacant Slave", time:"13:45", text:"Quisque dictumst"},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {date:' 2019-06-02', title:"Storms of Sword", time:"13:25", text:"Ullamcorper hac rutrum"},
        {},
        {},
        {},
        {date:' 2019-07-10', title:"The Thief's Female", time:"05:00", text:"Dolor"},
        {},
        {},
        {date:' 2019-09-05', title:"The Voyager of the Shards", time:"00:00", text:"Erat nisi"},
        {},
        {},
        {},
        {},
        {},
        {},
    ];

    rHeaderMonth()
    {
        return(
            <div className="header row flex-middle" style={this.state.showMonthNav ? {} : {display:'none'}}>
                <div className="col col-start">
                    <div className="icon btn" onClick={this.prevMonth}>
                        arrow_back
                    </div>
                </div>
                <div className="col col-center curMonth">
                    {this.state.currentMonth.format('MMMM YYYY')}
                    <div className="icon btn" onClick={this.onNavClick}>
                        swap_vert
                    </div>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon btn">
                        arrow_forward
                    </div>
                </div>
            </div>
        );
    }

    rHeaderWeek()
    {
        return(
            <div className="header row flex-middle" style={this.state.showWeekNav ? {} : {display:'none'}}>
                <div className="col col-start">
                    <div className="icon btn" onClick={this.prevWeek}>
                        arrow_back
                    </div>
                </div>
                <div className="col col-center curMonth">
                    {this.state.currentMonth.startOf('week').format('D - MMMM')}
                    <div className="icon btn" onClick={this.onNavClick}>
                        swap_vert
                    </div>
                </div>
                <div className="col col-end" onClick={this.nextWeek}>
                    <div className="icon btn">
                        arrow_forward
                    </div>
                </div>
            </div>
        );
    }

    rNav()
    {
        return(
            <div className="header row nav" style={this.state.showNav ? {} : {display:'none'}}>
                <div className="col colnavl">
                </div>
                    <div className="col col-center btn-rad" onClick={this.onWeekClick}>
                        Неделя
                    </div>
                    <div className="colcentr">
                    </div>
                    <div className="col col-center btn-rad" onClick={this.onMonthClick}>
                        Месяц
                    </div>
                <div className='col colnavr'>

                </div>
            </div>
        )
    }

    rDays()
    {
        const days = [];
        for(let i = 1; i < 8; i++)
        {
            days.push(
                <div className="col col-center weekDay" key={i}>
                    {moment.weekdaysMin(i)}
                </div>
            );
        }
        return <div className="days row weekday" style={this.state.showDays ? {} : {display:'none'}}>{days}</div>
    }

    rMonth()
    {
        const { currentMonth, selDay } = this.state;
        const monthStart = moment(currentMonth).startOf('month');
        const monthEnd = moment(monthStart).endOf('month');
        const startDate = monthStart.startOf('week');
        const endDate = monthEnd.endOf('week');

        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate)
        {
            for (let i = 0; i < 7; i++)
            {
                formattedDate = day.format('D');
                const cloneDay = moment(day);
                days.push(
                    <div className={`days col col-center 
                    
                    ${(day.isSame(this.events[0].date)&& day.isSame(this.repeats[0].date) && day.isSame(this.repeats2[0].date)) ? "cell3" : (day.isSame(this.events[0].date)&& day.isSame(this.repeats[0].date))? "cell2": (day.isSame(this.events[0].date))? "cell1": ""}
                    ${(day.isSame(this.events[1].date)&& day.isSame(this.repeats[1].date) && day.isSame(this.repeats2[1].date)) ? "cell3" : (day.isSame(this.events[1].date)&& day.isSame(this.repeats[1].date))? "cell2": (day.isSame(this.events[1].date))? "cell1": ""}
                    ${(day.isSame(this.events[2].date)&& day.isSame(this.repeats[2].date) && day.isSame(this.repeats2[2].date)) ? "cell3" : (day.isSame(this.events[2].date)&& day.isSame(this.repeats[2].date))? "cell2": (day.isSame(this.events[2].date))? "cell1": ""}
                    ${(day.isSame(this.events[3].date)&& day.isSame(this.repeats[3].date) && day.isSame(this.repeats2[3].date)) ? "cell3" : (day.isSame(this.events[3].date)&& day.isSame(this.repeats[3].date))? "cell2": (day.isSame(this.events[3].date))? "cell1": ""}
                    ${(day.isSame(this.events[4].date)&& day.isSame(this.repeats[4].date) && day.isSame(this.repeats2[4].date)) ? "cell3" : (day.isSame(this.events[4].date)&& day.isSame(this.repeats[4].date))? "cell2": (day.isSame(this.events[4].date))? "cell1": ""}
                    ${(day.isSame(this.events[5].date)&& day.isSame(this.repeats[5].date) && day.isSame(this.repeats2[5].date)) ? "cell3" : (day.isSame(this.events[5].date)&& day.isSame(this.repeats[5].date))? "cell2": (day.isSame(this.events[5].date))? "cell1": ""}
                    ${(day.isSame(this.events[6].date)&& day.isSame(this.repeats[6].date) && day.isSame(this.repeats2[6].date)) ? "cell3" : (day.isSame(this.events[6].date)&& day.isSame(this.repeats[6].date))? "cell2": (day.isSame(this.events[6].date))? "cell1": ""}
                    ${(day.isSame(this.events[7].date)&& day.isSame(this.repeats[7].date) && day.isSame(this.repeats2[7].date)) ? "cell3" : (day.isSame(this.events[7].date)&& day.isSame(this.repeats[7].date))? "cell2": (day.isSame(this.events[7].date))? "cell1": ""}
                    ${(day.isSame(this.events[8].date)&& day.isSame(this.repeats[8].date) && day.isSame(this.repeats2[8].date)) ? "cell3" : (day.isSame(this.events[8].date)&& day.isSame(this.repeats[8].date))? "cell2": (day.isSame(this.events[8].date))? "cell1": ""}
                    ${(day.isSame(this.events[9].date)&& day.isSame(this.repeats[9].date) && day.isSame(this.repeats2[9].date)) ? "cell3" : (day.isSame(this.events[9].date)&& day.isSame(this.repeats[9].date))? "cell2": (day.isSame(this.events[9].date))? "cell1": ""}
                    ${(day.isSame(this.events[10].date)&& day.isSame(this.repeats[10].date) && day.isSame(this.repeats2[10].date)) ? "cell3" : (day.isSame(this.events[10].date)&& day.isSame(this.repeats[10].date))? "cell2": (day.isSame(this.events[10].date))? "cell1": ""}
                    ${(day.isSame(this.events[11].date)&& day.isSame(this.repeats[11].date) && day.isSame(this.repeats2[11].date)) ? "cell3" : (day.isSame(this.events[11].date)&& day.isSame(this.repeats[11].date))? "cell2": (day.isSame(this.events[11].date))? "cell1": ""}
                    ${(day.isSame(this.events[12].date)&& day.isSame(this.repeats[12].date) && day.isSame(this.repeats2[12].date)) ? "cell3" : (day.isSame(this.events[12].date)&& day.isSame(this.repeats[12].date))? "cell2": (day.isSame(this.events[12].date))? "cell1": ""}
                    ${(day.isSame(this.events[13].date)&& day.isSame(this.repeats[13].date) && day.isSame(this.repeats2[13].date)) ? "cell3" : (day.isSame(this.events[13].date)&& day.isSame(this.repeats[13].date))? "cell2": (day.isSame(this.events[13].date))? "cell1": ""}
                    ${(day.isSame(this.events[14].date)&& day.isSame(this.repeats[14].date) && day.isSame(this.repeats2[14].date)) ? "cell3" : (day.isSame(this.events[14].date)&& day.isSame(this.repeats[14].date))? "cell2": (day.isSame(this.events[14].date))? "cell1": ""}
                    ${(day.isSame(this.events[15].date)&& day.isSame(this.repeats[15].date) && day.isSame(this.repeats2[15].date)) ? "cell3" : (day.isSame(this.events[15].date)&& day.isSame(this.repeats[15].date))? "cell2": (day.isSame(this.events[15].date))? "cell1": ""}
                    ${(day.isSame(this.events[16].date)&& day.isSame(this.repeats[16].date) && day.isSame(this.repeats2[16].date)) ? "cell3" : (day.isSame(this.events[16].date)&& day.isSame(this.repeats[16].date))? "cell2": (day.isSame(this.events[16].date))? "cell1": ""}
                    ${(day.isSame(this.events[17].date)&& day.isSame(this.repeats[17].date) && day.isSame(this.repeats2[17].date)) ? "cell3" : (day.isSame(this.events[17].date)&& day.isSame(this.repeats[17].date))? "cell2": (day.isSame(this.events[17].date))? "cell1": ""}
                    ${(day.isSame(this.events[18].date)&& day.isSame(this.repeats[18].date) && day.isSame(this.repeats2[18].date)) ? "cell3" : (day.isSame(this.events[18].date)&& day.isSame(this.repeats[18].date))? "cell2": (day.isSame(this.events[18].date))? "cell1": ""}
                    ${(day.isSame(this.events[19].date)&& day.isSame(this.repeats[19].date) && day.isSame(this.repeats2[19].date)) ? "cell3" : (day.isSame(this.events[19].date)&& day.isSame(this.repeats[19].date))? "cell2": (day.isSame(this.events[19].date))? "cell1": ""}
                    ${(day.isSame(this.events[20].date)&& day.isSame(this.repeats[20].date) && day.isSame(this.repeats2[20].date)) ? "cell3" : (day.isSame(this.events[20].date)&& day.isSame(this.repeats[20].date))? "cell2": (day.isSame(this.events[20].date))? "cell1": ""}
                    ${(day.isSame(this.events[21].date)&& day.isSame(this.repeats[21].date) && day.isSame(this.repeats2[21].date)) ? "cell3" : (day.isSame(this.events[21].date)&& day.isSame(this.repeats[21].date))? "cell2": (day.isSame(this.events[21].date))? "cell1": ""}
                    ${(day.isSame(this.events[22].date)&& day.isSame(this.repeats[22].date) && day.isSame(this.repeats2[22].date)) ? "cell3" : (day.isSame(this.events[22].date)&& day.isSame(this.repeats[22].date))? "cell2": (day.isSame(this.events[22].date))? "cell1": ""}
                    ${(day.isSame(this.events[23].date)&& day.isSame(this.repeats[23].date) && day.isSame(this.repeats2[23].date)) ? "cell3" : (day.isSame(this.events[23].date)&& day.isSame(this.repeats[23].date))? "cell2": (day.isSame(this.events[23].date))? "cell1": ""}
                    
                    ${!moment().isSame(monthStart, 'month')? "disabled": day.isSame(selDay, 'day') ? "selected" : ""}`}
                         key={day} onClick={() => this.onDateClick(moment(cloneDay))}>
                        <span className="number">{formattedDate}</span>
                    </div>
                );
                day = day.add(1,'day');
            }

            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body" style={this.state.showMonth ? {} : {display:'none'}}>{rows}</div>
    }

    rWeek()
    {
        const { currentMonth, selDay } = this.state;
        const startDate = moment(currentMonth).startOf('week');
        const endDate = moment(currentMonth).endOf('week');

        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate)
        {
            for (let i = 0; i < 7; i++)
            {
                formattedDate = day.format('D');
                const cloneDay = moment(day);
                days.push(
                    <div className={`days col col-center 
                    
                    ${(day.isSame(this.events[0].date)&& day.isSame(this.repeats[0].date) && day.isSame(this.repeats2[0].date)) ? "cell3" : (day.isSame(this.events[0].date)&& day.isSame(this.repeats[0].date))? "cell2": (day.isSame(this.events[0].date))? "cell1": ""}
                    ${(day.isSame(this.events[1].date)&& day.isSame(this.repeats[1].date) && day.isSame(this.repeats2[1].date)) ? "cell3" : (day.isSame(this.events[1].date)&& day.isSame(this.repeats[1].date))? "cell2": (day.isSame(this.events[1].date))? "cell1": ""}
                    ${(day.isSame(this.events[2].date)&& day.isSame(this.repeats[2].date) && day.isSame(this.repeats2[2].date)) ? "cell3" : (day.isSame(this.events[2].date)&& day.isSame(this.repeats[2].date))? "cell2": (day.isSame(this.events[2].date))? "cell1": ""}
                    ${(day.isSame(this.events[3].date)&& day.isSame(this.repeats[3].date) && day.isSame(this.repeats2[3].date)) ? "cell3" : (day.isSame(this.events[3].date)&& day.isSame(this.repeats[3].date))? "cell2": (day.isSame(this.events[3].date))? "cell1": ""}
                    ${(day.isSame(this.events[4].date)&& day.isSame(this.repeats[4].date) && day.isSame(this.repeats2[4].date)) ? "cell3" : (day.isSame(this.events[4].date)&& day.isSame(this.repeats[4].date))? "cell2": (day.isSame(this.events[4].date))? "cell1": ""}
                    ${(day.isSame(this.events[5].date)&& day.isSame(this.repeats[5].date) && day.isSame(this.repeats2[5].date)) ? "cell3" : (day.isSame(this.events[5].date)&& day.isSame(this.repeats[5].date))? "cell2": (day.isSame(this.events[5].date))? "cell1": ""}
                    ${(day.isSame(this.events[6].date)&& day.isSame(this.repeats[6].date) && day.isSame(this.repeats2[6].date)) ? "cell3" : (day.isSame(this.events[6].date)&& day.isSame(this.repeats[6].date))? "cell2": (day.isSame(this.events[6].date))? "cell1": ""}
                    ${(day.isSame(this.events[7].date)&& day.isSame(this.repeats[7].date) && day.isSame(this.repeats2[7].date)) ? "cell3" : (day.isSame(this.events[7].date)&& day.isSame(this.repeats[7].date))? "cell2": (day.isSame(this.events[7].date))? "cell1": ""}
                    ${(day.isSame(this.events[8].date)&& day.isSame(this.repeats[8].date) && day.isSame(this.repeats2[8].date)) ? "cell3" : (day.isSame(this.events[8].date)&& day.isSame(this.repeats[8].date))? "cell2": (day.isSame(this.events[8].date))? "cell1": ""}
                    ${(day.isSame(this.events[9].date)&& day.isSame(this.repeats[9].date) && day.isSame(this.repeats2[9].date)) ? "cell3" : (day.isSame(this.events[9].date)&& day.isSame(this.repeats[9].date))? "cell2": (day.isSame(this.events[9].date))? "cell1": ""}
                    ${(day.isSame(this.events[10].date)&& day.isSame(this.repeats[10].date) && day.isSame(this.repeats2[10].date)) ? "cell3" : (day.isSame(this.events[10].date)&& day.isSame(this.repeats[10].date))? "cell2": (day.isSame(this.events[10].date))? "cell1": ""}
                    ${(day.isSame(this.events[11].date)&& day.isSame(this.repeats[11].date) && day.isSame(this.repeats2[11].date)) ? "cell3" : (day.isSame(this.events[11].date)&& day.isSame(this.repeats[11].date))? "cell2": (day.isSame(this.events[11].date))? "cell1": ""}
                    ${(day.isSame(this.events[12].date)&& day.isSame(this.repeats[12].date) && day.isSame(this.repeats2[12].date)) ? "cell3" : (day.isSame(this.events[12].date)&& day.isSame(this.repeats[12].date))? "cell2": (day.isSame(this.events[12].date))? "cell1": ""}
                    ${(day.isSame(this.events[13].date)&& day.isSame(this.repeats[13].date) && day.isSame(this.repeats2[13].date)) ? "cell3" : (day.isSame(this.events[13].date)&& day.isSame(this.repeats[13].date))? "cell2": (day.isSame(this.events[13].date))? "cell1": ""}
                    ${(day.isSame(this.events[14].date)&& day.isSame(this.repeats[14].date) && day.isSame(this.repeats2[14].date)) ? "cell3" : (day.isSame(this.events[14].date)&& day.isSame(this.repeats[14].date))? "cell2": (day.isSame(this.events[14].date))? "cell1": ""}
                    ${(day.isSame(this.events[15].date)&& day.isSame(this.repeats[15].date) && day.isSame(this.repeats2[15].date)) ? "cell3" : (day.isSame(this.events[15].date)&& day.isSame(this.repeats[15].date))? "cell2": (day.isSame(this.events[15].date))? "cell1": ""}
                    ${(day.isSame(this.events[16].date)&& day.isSame(this.repeats[16].date) && day.isSame(this.repeats2[16].date)) ? "cell3" : (day.isSame(this.events[16].date)&& day.isSame(this.repeats[16].date))? "cell2": (day.isSame(this.events[16].date))? "cell1": ""}
                    ${(day.isSame(this.events[17].date)&& day.isSame(this.repeats[17].date) && day.isSame(this.repeats2[17].date)) ? "cell3" : (day.isSame(this.events[17].date)&& day.isSame(this.repeats[17].date))? "cell2": (day.isSame(this.events[17].date))? "cell1": ""}
                    ${(day.isSame(this.events[18].date)&& day.isSame(this.repeats[18].date) && day.isSame(this.repeats2[18].date)) ? "cell3" : (day.isSame(this.events[18].date)&& day.isSame(this.repeats[18].date))? "cell2": (day.isSame(this.events[18].date))? "cell1": ""}
                    ${(day.isSame(this.events[19].date)&& day.isSame(this.repeats[19].date) && day.isSame(this.repeats2[19].date)) ? "cell3" : (day.isSame(this.events[19].date)&& day.isSame(this.repeats[19].date))? "cell2": (day.isSame(this.events[19].date))? "cell1": ""}
                    ${(day.isSame(this.events[20].date)&& day.isSame(this.repeats[20].date) && day.isSame(this.repeats2[20].date)) ? "cell3" : (day.isSame(this.events[20].date)&& day.isSame(this.repeats[20].date))? "cell2": (day.isSame(this.events[20].date))? "cell1": ""}
                    ${(day.isSame(this.events[21].date)&& day.isSame(this.repeats[21].date) && day.isSame(this.repeats2[21].date)) ? "cell3" : (day.isSame(this.events[21].date)&& day.isSame(this.repeats[21].date))? "cell2": (day.isSame(this.events[21].date))? "cell1": ""}
                    ${(day.isSame(this.events[22].date)&& day.isSame(this.repeats[22].date) && day.isSame(this.repeats2[22].date)) ? "cell3" : (day.isSame(this.events[22].date)&& day.isSame(this.repeats[22].date))? "cell2": (day.isSame(this.events[22].date))? "cell1": ""}
                    ${(day.isSame(this.events[23].date)&& day.isSame(this.repeats[23].date) && day.isSame(this.repeats2[23].date)) ? "cell3" : (day.isSame(this.events[23].date)&& day.isSame(this.repeats[23].date))? "cell2": (day.isSame(this.events[23].date))? "cell1": ""}
                    
                    ${!moment().isSame(startDate, 'month')? "disabled": day.isSame(selDay, 'day') ? "selected" : ""}`}
                         key={day} onClick={() => this.onDateClick(moment(cloneDay))}>
                        <span className="number">{formattedDate}</span>
                    </div>
                );
                day = day.add(1,'day');
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body" style={this.state.showWeek ? {} : {display:'none'}}>{rows}</div>
    }

    rActionList()
    {
        let date,title,text,time = "";
        let title2,text2,time2 = "";
        let title3,text3,time3 = "";

        for (let i = 0; i < this.events.length; i++) {
            if (moment(this.events[i].date).isSame(this.state.selectedDate)) {
                this.state.showAction1 = true;
                date = moment(this.events[i].date).format('dd, D MMM');
                title = this.events[i].title;
                text = this.events[i].text;
                time = moment(this.events[i].time, "HH:mm").format("HH:mm");
            } else {
                date = moment(this.state.selectedDate).format('dd, D MMM');
            }
        }

            for (let i = 0; i < this.repeats.length; i++)
            {
                if(moment(this.repeats[i].date).isSame(this.state.selectedDate))
                {
                    this.state.showAction2 = true;
                    title2 = this.repeats[i].title;
                    text2 = this.repeats[i].text;
                    time2 = moment(this.repeats[i].time, "HH:mm").format("HH:mm");
                }
            }

        for(let i = 0; i < this.repeats2.length; i++)
        {
            if(moment(this.repeats2[i].date).isSame(this.state.selectedDate))
            {
                this.state.showAction3 = true;
                title3 = this.repeats2[i].title;
                text3 = this.repeats2[i].text;
                time3 = moment(this.repeats2[i].time, "HH:mm").format("HH:mm");
            }
        }

        return(
            <div>
                <div style={this.state.showAction1 ? {} : {display:'none'}}>
                    <div className='action'>
                        <div className='col action-date'>{date}</div>
                        <div className='action-card'>
                            <div className='row'>
                                <div className='col action-title'>{title}</div>
                                <div className='col action-time'>{time}</div>
                            </div>
                            <div className='col action-text'>{text}</div>
                        </div>
                    </div>
                    <div style={this.state.showAction1 ? {display: 'none'} : {}}>{this.state.showAction1=false}</div>
                </div>

                <div style={this.state.showAction2 ? {} : {display:'none'}}>
                    <div className='action'>
                        <div className='action-card2'>
                            <div className='row'>
                                <div className='col action-title'>{title2}</div>
                                <div className='col action-time'>{time2}</div>
                            </div>
                            <div className='col action-text'>{text2}</div>
                        </div>
                    </div>
                    <div style={this.state.showAction2 ? {display: 'none'} : {}}>{this.state.showAction2=false}</div>
                </div>

                <div style={this.state.showAction3 ? {} : {display:'none'}}>
                    <div className='action'>
                        <div className='action-card2'>
                            <div className='row'>
                                <div className='col action-title'>{title3}</div>
                                <div className='col action-time'>{time3}</div>
                            </div>
                            <div className='col action-text'>{text3}</div>
                        </div>
                    </div>
                    <div style={this.state.showAction3 ? {display: 'none'} : {}}>{this.state.showAction3=false}</div>
                </div>
            </div>
        );
    }

    onDateClick = day => {
        this.setState({
            selectedDate: day,
            showAction: true
        });
    };

    onNavClick = () => {
        this.setState({
            showNav: !this.state.showNav,
            showDays: !this.state.showDays,
            arrow: !this.state.arrow,
        })
    };

    onMonthClick = () => {
        this.setState({
            showMonthNav: true,
            showWeekNav: false,
            showMonth: true,
            showWeek: false,
            showNav: false,
            showDays: true
        })
    };

    onWeekClick = () => {
        this.setState({
            showMonthNav: false,
            showWeekNav: true,
            showMonth: false,
            showWeek: true,
            showNav: false,
            showDays: true
        })
    };

    prevWeek = () => {
        this.setState({
            currentMonth: this.state.currentMonth.subtract(1,'week')
        })
    };

    nextWeek = () => {
        this.setState({
            currentMonth: this.state.currentMonth.add(1,'week')
        })
    };

    prevMonth = () => {
        this.setState({
            currentMonth: this.state.currentMonth.subtract(1,'month')
        })
    };

    nextMonth = () => {
        this.setState({
            currentMonth: this.state.currentMonth.add(1,'month')
        })
    };

    render()
    {
        return(
            <div className="calendar">
                {this.rHeaderMonth()}
                {this.rHeaderWeek()}
                {this.rNav()}
                {this.rDays()}
                {this.rMonth()}
                {this.rWeek()}
                {this.rActionList()}
            </div>
        )
    }

}

export default Calendar;