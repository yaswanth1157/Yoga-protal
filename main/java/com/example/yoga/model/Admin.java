package com.example.yoga.model;

import com.fasterxml.jackson.core.sym.Name;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Admin {
         @Id
         private int aId;
         private String aName;
         private String aEmail;
        public int getaId() {
            return aId;
        }
        public void setaId(int aId) {
            this.aId = aId;
        }
        public String getaName() {
            return aName;
        }
        public void setaName(String aName) {
            this.aName = aName;
        }
        public String getaEmail() {
            return aEmail;
        }
        public void setaEmail(String aEmail) {
            this.aEmail = aEmail;
        }
        public Admin(int aId, String aName, String aEmail) {
            this.aId = aId;
            this.aName = aName;
            this.aEmail = aEmail;
        } 
}
