-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/5RjkLk
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Players" (
    "id"  SERIAL  NOT NULL,
    "name" VARCHAR   NOT NULL,
    "date_of_birth" DATE   NOT NULL,
    "position" VARCHAR   NOT NULL,
    "current_club" VARCHAR   NOT NULL,
    "f_matches" INT(3)   NOT NULL,
    "f_sustitutions" INT(3)   NOT NULL,
    "f_goals" INT(3)   NOT NULL,
    "nf_matches" INT(3)   NOT NULL,
    "nf_sustitutions" INT(3)   NOT NULL,
    "nf_goals" INT(3)   NOT NULL,
    "national_team" VARCHAR   NOT NULL,
    "year" INT(4)   NOT NULL,
    CONSTRAINT "pk_Players" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Countries" (
    "id"  SERIAL  NOT NULL,
    "country_full" VARCHAR   NOT NULL,
    "country_abrv" VARCHAR   NOT NULL,
    "rank" INT   NOT NULL,
    "total_points" INT   NOT NULL,
    "previous_points" INT   NOT NULL,
    "rank_change" INT   NOT NULL,
    "confederation" VARCHAR   NOT NULL,
    "rank_date" DATE   NOT NULL,
    CONSTRAINT "pk_Countries" PRIMARY KEY (
        "id"
     )
);

