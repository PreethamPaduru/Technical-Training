package com.anurag.aiml.twilio;

import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

   @Value("${twilio.phone-number}")
   private String twilioPhoneNumber;

   public String sendSms(String to, String messageText) {

       Message message = Message.creator(
               new PhoneNumber(to),
               new PhoneNumber(twilioPhoneNumber),
               messageText
       ).create();

       return message.getSid();
   }
}