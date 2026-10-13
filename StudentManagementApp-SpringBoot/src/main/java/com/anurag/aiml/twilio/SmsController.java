package com.anurag.aiml.twilio;


import org.springframework.web.bind.annotation.*;

import com.anurag.aiml.twilio.SmsService;

@RestController
@RequestMapping("/api/sms")
@CrossOrigin("*")
public class SmsController {

    private final SmsService smsService;

    public SmsController(SmsService smsService) {
        this.smsService = smsService;
    }

    @PostMapping("/send")
    public String sendSms(
            @RequestParam String phone,
            @RequestParam String message) {

        return smsService.sendSms(phone, message);
    }
}