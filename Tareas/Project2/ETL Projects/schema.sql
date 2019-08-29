DROP TABLE "Players";
DROP TABLE "Countries"; 

CREATE TABLE "Players" (
    "id"  INT  NOT NULL,
    "name" VARCHAR   NOT NULL,
    "date_of_birth" DATE   NOT NULL,
    "position" VARCHAR   NOT NULL,
    "current_club" VARCHAR   NOT NULL,
    "f_matches" INT   NOT NULL,
    "f_substitutions" INT   NOT NULL,
    "f_goals" INT   NOT NULL,
    "nf_matches" INT   NOT NULL,
    "nf_substitutions" INT   NOT NULL,
    "nf_goals" INT   NOT NULL,
    "national_team" VARCHAR   NOT NULL,
    "year" INT   NOT NULL,
    CONSTRAINT "pk_Players" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Countries" (
	"id" SERIAL  NOT NULL,
    "country_full" VARCHAR   NOT NULL,
    "country_abrv" VARCHAR   NOT NULL,
    "rank" INT   NOT NULL,
    "total_points" INT   NOT NULL,
    "previous_points" INT   NOT NULL,
    "rank_change" INT   NOT NULL,
    "confederation" VARCHAR   NOT NULL,
    "rank_date" DATE   NOT NULL
);