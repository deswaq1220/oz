"use strict";
// 유틸리티 타입
{
    const capitals = {
        "South Korea": "seoul",
        "United States": "Washington D.C",
        "Canada": "Ottawa"
    };
    const countryInfo = {
        'South Korea': {
            capital: "seoul",
            population: 51000000,
            continent: "asia"
        },
        'United States': {
            capital: "Washington D.C",
            population: 331000000,
            continent: "어쩌고"
        },
        'Canada': {
            capital: "Ottawa",
            population: 83000000,
            continent: 'dksf;dsj'
        }
    };
    function someFunction(...param) {
        const [id] = param;
    }
    someFunction(100);
    function saveUser(...params) {
        const [name, age] = params;
    }
    saveUser("David", 33);
}
