package com.app.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Match;

public interface MatchRepo extends JpaRepository<Match, Integer> {
  // fetch match 
	// provide -> teamName and get that match
	

	Optional<Match> findByTeamHeading(String teamHeading);
}
