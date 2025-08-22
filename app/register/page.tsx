"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Calendar,
  User,
  Users,
  Heart,
  FileText,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Player Information
    playerName: "",
    dateOfBirth: "",
    gender: "",
    ageGroup: "",

    // Parent/Guardian Information
    parentName: "",
    relationship: "",
    parentPhone: "",
    parentEmail: "",
    address: "",

    // Emergency Contact
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelationship: "",

    // Medical Information
    medicalConditions: "",
    allergies: "",
    medications: "",

    // Football Experience
    previousExperience: "",
    experienceLevel: "",
    preferredPosition: "",

    // Program Preferences
    programType: "",
    trainingDays: [],
    additionalNotes: "",

    // Agreements
    termsAccepted: false,
    photoConsent: false,
    medicalConsent: false,
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Registration submitted:", formData);
    alert(
      "Registration submitted successfully! We will contact you within 48 hours."
    );
  };

  return (
    <div className="">
      {/* Registration Form */}
      <section className="py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <User className="mr-1 h-3 w-3" />
              Player Registration
            </Badge>
            <h1 className="text-3xl font-bold mb-4">
              Join HISS Football Club Academy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete this registration form to secure your spot in our
              football academy. We'll review your application and contact you
              within 48 hours.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {currentStep === 1 && (
                  <>
                    <User className="h-5 w-5" /> Player Information
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <Users className="h-5 w-5" /> Parent/Guardian Details
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <Heart className="h-5 w-5" /> Medical Information
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <Calendar className="h-5 w-5" /> Football Experience &
                    Preferences
                  </>
                )}
                {currentStep === 5 && (
                  <>
                    <FileText className="h-5 w-5" /> Review & Submit
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Player Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="playerName">Full Name *</Label>
                      <Input
                        id="playerName"
                        value={formData.playerName}
                        onChange={(e) =>
                          handleInputChange("playerName", e.target.value)
                        }
                        placeholder="Enter player's full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          handleInputChange("dateOfBirth", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label>Gender *</Label>
                      <RadioGroup
                        value={formData.gender}
                        onValueChange={(value) =>
                          handleInputChange("gender", value)
                        }
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div>
                      <Label htmlFor="ageGroup">Age Group *</Label>
                      <Select
                        value={formData.ageGroup}
                        onValueChange={(value) =>
                          handleInputChange("ageGroup", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under10">
                            Under 10 (Ages 8-9)
                          </SelectItem>
                          <SelectItem value="under12">
                            Under 12 (Ages 10-11)
                          </SelectItem>
                          <SelectItem value="under15">
                            Under 15 (Ages 12-15)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Parent/Guardian Information */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) =>
                          handleInputChange("parentName", e.target.value)
                        }
                        placeholder="Enter parent/guardian name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="relationship">Relationship *</Label>
                      <Select
                        value={formData.relationship}
                        onValueChange={(value) =>
                          handleInputChange("relationship", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="guardian">Guardian</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="parentPhone">Phone Number *</Label>
                      <Input
                        id="parentPhone"
                        value={formData.parentPhone}
                        onChange={(e) =>
                          handleInputChange("parentPhone", e.target.value)
                        }
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentEmail">Email Address</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) =>
                          handleInputChange("parentEmail", e.target.value)
                        }
                        placeholder="parent@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Home Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      placeholder="Enter complete home address"
                      rows={3}
                    />
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-4">Emergency Contact</h4>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <Label htmlFor="emergencyName">
                          Emergency Contact Name *
                        </Label>
                        <Input
                          id="emergencyName"
                          value={formData.emergencyName}
                          onChange={(e) =>
                            handleInputChange("emergencyName", e.target.value)
                          }
                          placeholder="Emergency contact name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergencyPhone">
                          Emergency Phone *
                        </Label>
                        <Input
                          id="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={(e) =>
                            handleInputChange("emergencyPhone", e.target.value)
                          }
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergencyRelationship">
                          Relationship *
                        </Label>
                        <Input
                          id="emergencyRelationship"
                          value={formData.emergencyRelationship}
                          onChange={(e) =>
                            handleInputChange(
                              "emergencyRelationship",
                              e.target.value
                            )
                          }
                          placeholder="e.g., Uncle, Aunt"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Medical Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="medicalConditions">
                      Medical Conditions
                    </Label>
                    <Textarea
                      id="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={(e) =>
                        handleInputChange("medicalConditions", e.target.value)
                      }
                      placeholder="List any medical conditions (e.g., asthma, diabetes) or write 'None'"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="allergies">Allergies</Label>
                    <Textarea
                      id="allergies"
                      value={formData.allergies}
                      onChange={(e) =>
                        handleInputChange("allergies", e.target.value)
                      }
                      placeholder="List any allergies (food, medication, environmental) or write 'None'"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="medications">Current Medications</Label>
                    <Textarea
                      id="medications"
                      value={formData.medications}
                      onChange={(e) =>
                        handleInputChange("medications", e.target.value)
                      }
                      placeholder="List any current medications or write 'None'"
                      rows={3}
                    />
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> This information is confidential
                      and will only be used for the safety and well-being of
                      your child during training sessions and activities.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Football Experience & Preferences */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <Label>Previous Football Experience *</Label>
                    <RadioGroup
                      value={formData.experienceLevel}
                      onValueChange={(value) =>
                        handleInputChange("experienceLevel", value)
                      }
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="beginner" id="beginner" />
                        <Label htmlFor="beginner">
                          Beginner (No previous experience)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="some" id="some" />
                        <Label htmlFor="some">
                          Some experience (School/community football)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="experienced" id="experienced" />
                        <Label htmlFor="experienced">
                          Experienced (Club/academy training)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="previousExperience">
                      Previous Football Experience Details
                    </Label>
                    <Textarea
                      id="previousExperience"
                      value={formData.previousExperience}
                      onChange={(e) =>
                        handleInputChange("previousExperience", e.target.value)
                      }
                      placeholder="Describe any previous football experience, teams played for, achievements, etc."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredPosition">
                      Preferred Playing Position
                    </Label>
                    <Select
                      value={formData.preferredPosition}
                      onValueChange={(value) =>
                        handleInputChange("preferredPosition", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="goalkeeper">Goalkeeper</SelectItem>
                        <SelectItem value="defender">Defender</SelectItem>
                        <SelectItem value="midfielder">Midfielder</SelectItem>
                        <SelectItem value="forward">Forward/Striker</SelectItem>
                        <SelectItem value="any">Any Position</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={(e) =>
                        handleInputChange("additionalNotes", e.target.value)
                      }
                      placeholder="Any additional information you'd like us to know about your child"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Review & Submit */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Registration Summary</h4>
                    <div className="grid gap-4 md:grid-cols-2 text-sm">
                      <div>
                        <strong>Player:</strong> {formData.playerName}
                      </div>
                      <div>
                        <strong>Age Group:</strong> {formData.ageGroup}
                      </div>
                      <div>
                        <strong>Parent/Guardian:</strong> {formData.parentName}
                      </div>
                      <div>
                        <strong>Phone:</strong> {formData.parentPhone}
                      </div>
                      <div>
                        <strong>Experience Level:</strong>{" "}
                        {formData.experienceLevel}
                      </div>
                      <div>
                        <strong>Preferred Position:</strong>{" "}
                        {formData.preferredPosition}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="termsAccepted"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) =>
                          handleInputChange("termsAccepted", checked)
                        }
                      />
                      <Label
                        htmlFor="termsAccepted"
                        className="text-sm leading-relaxed"
                      >
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-primary hover:underline"
                        >
                          Terms and Conditions
                        </Link>{" "}
                        and understand the academy's policies regarding
                        training, fees, and conduct.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="photoConsent"
                        checked={formData.photoConsent}
                        onCheckedChange={(checked) =>
                          handleInputChange("photoConsent", checked)
                        }
                      />
                      <Label
                        htmlFor="photoConsent"
                        className="text-sm leading-relaxed"
                      >
                        I consent to photographs and videos of my child being
                        taken during training and events for promotional
                        purposes.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="medicalConsent"
                        checked={formData.medicalConsent}
                        onCheckedChange={(checked) =>
                          handleInputChange("medicalConsent", checked)
                        }
                      />
                      <Label
                        htmlFor="medicalConsent"
                        className="text-sm leading-relaxed"
                      >
                        I authorize HISS Football Club to seek emergency medical
                        treatment for my child if needed during training or
                        academy activities.
                      </Label>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      What happens next?
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• We'll review your application within 48 hours</li>
                      <li>
                        • You'll receive a confirmation call/email with next
                        steps
                      </li>
                      <li>
                        • Schedule a trial session to assess your child's
                        current level
                      </li>
                      <li>• Complete enrollment and begin training!</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 bg-transparent"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={
                      !formData.termsAccepted || !formData.medicalConsent
                    }
                    className="bg-primary hover:bg-primary/90 flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Submit Registration
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Need help with registration? Contact us at{" "}
              <Link href="/contact" className="text-primary hover:underline">
                +233 XX XXX XXXX
              </Link>{" "}
              or{" "}
              <Link
                href="mailto:info@hissfc.com"
                className="text-primary hover:underline"
              >
                info@hissfc.com
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
