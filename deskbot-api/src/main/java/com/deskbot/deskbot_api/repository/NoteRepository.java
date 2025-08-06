package com.deskbot.deskbot_api.repository;

import com.deskbot.deskbot_api.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
