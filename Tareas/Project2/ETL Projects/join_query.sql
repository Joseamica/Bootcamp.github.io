SELECT pl.name, pl.national_team, pl.year, ct.rank, ct.rank_date
FROM "Players" AS pl, "Countries" AS ct
WHERE pl.year = EXTRACT(YEAR FROM ct.rank_date)
AND pl.national_team = ct.country_full;	