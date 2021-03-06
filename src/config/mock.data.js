export default () => ({
    "data_version": "19.11",
    "data": [
      {
        "target": {
          "tractability": {
            "smallmolecule": {
              "top_category": "Discovery_Precedence",
              "small_molecule_genome_member": false,
              "buckets": [
                4
              ],
              "high_quality_compounds": 0,
              "ensemble": -0.82975974,
              "categories": {
                "clinical_precedence": 0.0,
                "predicted_tractable": 0.0,
                "discovery_precedence": 0.7
              }
            },
            "antibody": {
              "top_category": "Predicted_Tractable__High_confidence",
              "buckets": [
                5,
                6,
                7
              ],
              "categories": {
                "predicted_tractable_med_low_confidence": 0.65,
                "clinical_precedence": 0.0,
                "predicted_tractable_high_confidence": 0.3
              }
            }
          },
          "gene_info": {
            "symbol": "TFPI",
            "name": "tissue factor pathway inhibitor"
          },
          "id": "ENSG00000003436"
        },
        "association_score": {
          "datatypes": {
            "literature": 0.19517772984514156,
            "rna_expression": 0.07211524912501942,
            "genetic_association": 0.22628011248337543,
            "somatic_mutation": 0.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 0.5
          },
          "overall": 0.5827636456183956,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.07211524912501942,
            "europepmc": 0.19517772984514156,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.22628011248337543,
            "slapenrich": 0.5,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "disease": {
          "efo_info": {
            "therapeutic_area": {
              "labels": [
                "neoplastic, precancerous and hyperplastic disease",
                "respiratory or thoracic disease"
              ],
              "codes": [
                "MONDO_0045024",
                "OTAR_0000010"
              ]
            },
            "path": [
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0006858",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0009433",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ]
            ],
            "label": "lung carcinoma"
          },
          "id": "EFO_0001071"
        },
        "is_direct": true,
        "evidence_count": {
          "datatypes": {
            "literature": 15.0,
            "rna_expression": 2.0,
            "genetic_association": 1.0,
            "somatic_mutation": 0.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 1.0
          },
          "total": 19.0,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 2.0,
            "europepmc": 15.0,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 1.0,
            "slapenrich": 1.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "id": "ENSG00000003436-EFO_0001071"
      },
      {
        "target": {
          "tractability": {
            "smallmolecule": {
              "top_category": "Unknown",
              "small_molecule_genome_member": false,
              "buckets": [],
              "high_quality_compounds": 0,
              "ensemble": -1.0,
              "categories": {
                "clinical_precedence": 0.0,
                "predicted_tractable": 0.0,
                "discovery_precedence": 0.0
              }
            },
            "antibody": {
              "top_category": "Unknown",
              "buckets": [],
              "categories": {
                "predicted_tractable_med_low_confidence": 0.0,
                "clinical_precedence": 0.0,
                "predicted_tractable_high_confidence": 0.0
              }
            }
          },
          "gene_info": {
            "symbol": "GATAD2B",
            "name": "GATA zinc finger domain containing 2B"
          },
          "id": "ENSG00000143614"
        },
        "association_score": {
          "datatypes": {
            "literature": 0.050499999999999996,
            "rna_expression": 0.0,
            "genetic_association": 0.0,
            "somatic_mutation": 0.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 0.625
          },
          "overall": 0.637625,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.0,
            "europepmc": 0.050499999999999996,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 0.625,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "disease": {
          "efo_info": {
            "therapeutic_area": {
              "labels": [
                "neoplastic, precancerous and hyperplastic disease",
                "respiratory or thoracic disease"
              ],
              "codes": [
                "MONDO_0045024",
                "OTAR_0000010"
              ]
            },
            "path": [
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0006858",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0009433",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ]
            ],
            "label": "lung carcinoma"
          },
          "id": "EFO_0001071"
        },
        "is_direct": false,
        "evidence_count": {
          "datatypes": {
            "literature": 2.0,
            "rna_expression": 0.0,
            "genetic_association": 0.0,
            "somatic_mutation": 0.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 2.0
          },
          "total": 4.0,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.0,
            "europepmc": 2.0,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 2.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "id": "ENSG00000143614-EFO_0001071"
      },
      {
        "target": {
          "tractability": {
            "smallmolecule": {
              "top_category": "Clinical_Precedence",
              "small_molecule_genome_member": true,
              "buckets": [
                1,
                4,
                5,
                7,
                8
              ],
              "high_quality_compounds": 0,
              "ensemble": 0.7958456,
              "categories": {
                "clinical_precedence": 1.0,
                "predicted_tractable": 1.0,
                "discovery_precedence": 1.0
              }
            },
            "antibody": {
              "top_category": "Clinical_Precedence",
              "buckets": [
                1,
                4,
                5,
                6,
                7
              ],
              "categories": {
                "predicted_tractable_med_low_confidence": 0.65,
                "clinical_precedence": 1.0,
                "predicted_tractable_high_confidence": 1.0
              }
            }
          },
          "gene_info": {
            "symbol": "EGFR",
            "name": "epidermal growth factor receptor"
          },
          "id": "ENSG00000146648"
        },
        "association_score": {
          "datatypes": {
            "literature": 0.32635342324189076,
            "rna_expression": 0.06495800833742345,
            "genetic_association": 1.0,
            "somatic_mutation": 1.0,
            "known_drug": 1.0,
            "animal_model": 0.0,
            "affected_pathway": 1.0
          },
          "overall": 1.0,
          "datasources": {
            "progeny": 0.5621173737930528,
            "sysbio": 0.0,
            "expression_atlas": 0.06495800833742345,
            "europepmc": 0.32635342324189076,
            "intogen": 0.5208333333333334,
            "phewas_catalog": 0.0,
            "uniprot_literature": 1,
            "phenodigm": 0.0,
            "eva": 0.6669444444444443,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 0.8040836681902691,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 1,
            "cancer_gene_census": 0.8603492521740481,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.9030651117411246,
            "crispr": 0.82265625
          }
        },
        "disease": {
          "efo_info": {
            "therapeutic_area": {
              "labels": [
                "neoplastic, precancerous and hyperplastic disease",
                "respiratory or thoracic disease"
              ],
              "codes": [
                "MONDO_0045024",
                "OTAR_0000010"
              ]
            },
            "path": [
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0006858",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0009433",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ]
            ],
            "label": "lung carcinoma"
          },
          "id": "EFO_0001071"
        },
        "is_direct": true,
        "evidence_count": {
          "datatypes": {
            "literature": 11847.0,
            "rna_expression": 2.0,
            "genetic_association": 6.0,
            "somatic_mutation": 110.0,
            "known_drug": 778.0,
            "animal_model": 0.0,
            "affected_pathway": 31.0
          },
          "total": 12774.0,
          "datasources": {
            "progeny": 2.0,
            "sysbio": 0.0,
            "expression_atlas": 2.0,
            "europepmc": 11847.0,
            "intogen": 2.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 3.0,
            "phenodigm": 0.0,
            "eva": 3.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 27.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 778.0,
            "cancer_gene_census": 57.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 51.0,
            "crispr": 2.0
          }
        },
        "id": "ENSG00000146648-EFO_0001071"
      },
      {
        "target": {
          "tractability": {
            "smallmolecule": {
              "top_category": "Unknown",
              "small_molecule_genome_member": false,
              "buckets": [],
              "high_quality_compounds": 0,
              "ensemble": -1.0,
              "categories": {
                "clinical_precedence": 0.0,
                "predicted_tractable": 0.0,
                "discovery_precedence": 0.0
              }
            },
            "antibody": {
              "top_category": "Predicted_Tractable__High_confidence",
              "buckets": [
                5,
                6,
                7
              ],
              "categories": {
                "predicted_tractable_med_low_confidence": 0.65,
                "clinical_precedence": 0.0,
                "predicted_tractable_high_confidence": 0.3
              }
            }
          },
          "gene_info": {
            "symbol": "TNFRSF10C",
            "name": "TNF receptor superfamily member 10c"
          },
          "id": "ENSG00000173535"
        },
        "association_score": {
          "datatypes": {
            "literature": 0.0473,
            "rna_expression": 0.008777499019778616,
            "genetic_association": 0.0,
            "somatic_mutation": 0.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 0.625
          },
          "overall": 0.6378002776688643,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.008777499019778616,
            "europepmc": 0.0473,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 0.625,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "disease": {
          "efo_info": {
            "therapeutic_area": {
              "labels": [
                "neoplastic, precancerous and hyperplastic disease",
                "respiratory or thoracic disease"
              ],
              "codes": [
                "MONDO_0045024",
                "OTAR_0000010"
              ]
            },
            "path": [
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0006858",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0009433",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ]
            ],
            "label": "lung carcinoma"
          },
          "id": "EFO_0001071"
        },
        "is_direct": true,
        "evidence_count": {
          "datatypes": {
            "literature": 3.0,
            "rna_expression": 1.0,
            "genetic_association": 0.0,
            "somatic_mutation": 0.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 2.0
          },
          "total": 6.0,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 1.0,
            "europepmc": 3.0,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 2.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "id": "ENSG00000173535-EFO_0001071"
      },
      {
        "target": {
          "tractability": {
            "smallmolecule": {
              "top_category": "Discovery_Precedence",
              "small_molecule_genome_member": true,
              "buckets": [
                4,
                7,
                8
              ],
              "high_quality_compounds": 0,
              "ensemble": -0.93771555,
              "categories": {
                "clinical_precedence": 0.0,
                "predicted_tractable": 0.3,
                "discovery_precedence": 1.0
              }
            },
            "antibody": {
              "top_category": "Predicted_Tractable__High_confidence",
              "buckets": [
                4,
                5,
                7,
                9
              ],
              "categories": {
                "predicted_tractable_med_low_confidence": 0.35,
                "clinical_precedence": 0.0,
                "predicted_tractable_high_confidence": 1.0
              }
            }
          },
          "gene_info": {
            "symbol": "TGFBR2",
            "name": "transforming growth factor beta receptor 2"
          },
          "id": "ENSG00000163513"
        },
        "association_score": {
          "datatypes": {
            "literature": 0.2697429609181807,
            "rna_expression": 0.05516290503852242,
            "genetic_association": 0.0,
            "somatic_mutation": 0.7313473432632761,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 0.31888483464454703
          },
          "overall": 0.7867312254055623,
          "datasources": {
            "progeny": 0.31888483464454703,
            "sysbio": 0.0,
            "expression_atlas": 0.05516290503852242,
            "europepmc": 0.2697429609181807,
            "intogen": 0.3125,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 0.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.6532223432632761,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "disease": {
          "efo_info": {
            "therapeutic_area": {
              "labels": [
                "neoplastic, precancerous and hyperplastic disease",
                "respiratory or thoracic disease"
              ],
              "codes": [
                "MONDO_0045024",
                "OTAR_0000010"
              ]
            },
            "path": [
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0006858",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0009433",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ]
            ],
            "label": "lung carcinoma"
          },
          "id": "EFO_0001071"
        },
        "is_direct": true,
        "evidence_count": {
          "datatypes": {
            "literature": 25.0,
            "rna_expression": 2.0,
            "genetic_association": 0.0,
            "somatic_mutation": 21.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 2.0
          },
          "total": 50.0,
          "datasources": {
            "progeny": 2.0,
            "sysbio": 0.0,
            "expression_atlas": 2.0,
            "europepmc": 25.0,
            "intogen": 2.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 0.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 19.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "id": "ENSG00000163513-EFO_0001071"
      },
      {
        "target": {
          "tractability": {
            "smallmolecule": {
              "top_category": "Clinical_Precedence",
              "small_molecule_genome_member": true,
              "buckets": [
                1,
                7,
                8
              ],
              "high_quality_compounds": 0,
              "ensemble": -0.65715296,
              "categories": {
                "clinical_precedence": 1.0,
                "predicted_tractable": 0.3,
                "discovery_precedence": 0.3
              }
            },
            "antibody": {
              "top_category": "Predicted_Tractable__High_confidence",
              "buckets": [
                5
              ],
              "categories": {
                "predicted_tractable_med_low_confidence": 0.0,
                "clinical_precedence": 0.0,
                "predicted_tractable_high_confidence": 0.3
              }
            }
          },
          "gene_info": {
            "symbol": "PRKCB",
            "name": "protein kinase C beta"
          },
          "id": "ENSG00000166501"
        },
        "association_score": {
          "datatypes": {
            "literature": 0.10544477777777778,
            "rna_expression": 0.03273340643574627,
            "genetic_association": 0.0,
            "somatic_mutation": 0.4260148234065119,
            "known_drug": 0.3120661529350756,
            "animal_model": 0.0,
            "affected_pathway": 0.26658850665378675
          },
          "overall": 0.541551941692576,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.03273340643574627,
            "europepmc": 0.10544477777777778,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 0.26658850665378675,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.3120661529350756,
            "cancer_gene_census": 0.4260148234065119,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "disease": {
          "efo_info": {
            "therapeutic_area": {
              "labels": [
                "neoplastic, precancerous and hyperplastic disease",
                "respiratory or thoracic disease"
              ],
              "codes": [
                "MONDO_0045024",
                "OTAR_0000010"
              ]
            },
            "path": [
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0006858",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0009433",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ]
            ],
            "label": "lung carcinoma"
          },
          "id": "EFO_0001071"
        },
        "is_direct": true,
        "evidence_count": {
          "datatypes": {
            "literature": 6.0,
            "rna_expression": 1.0,
            "genetic_association": 0.0,
            "somatic_mutation": 13.0,
            "known_drug": 13.0,
            "animal_model": 0.0,
            "affected_pathway": 1.0
          },
          "total": 34.0,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 1.0,
            "europepmc": 6.0,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 1.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 13.0,
            "cancer_gene_census": 13.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "id": "ENSG00000166501-EFO_0001071"
      },
      {
        "target": {
          "tractability": {
            "smallmolecule": {
              "top_category": "Predicted_Tractable",
              "small_molecule_genome_member": false,
              "buckets": [
                6
              ],
              "high_quality_compounds": 0,
              "ensemble": 0.1453088,
              "categories": {
                "clinical_precedence": 0.0,
                "predicted_tractable": 0.3,
                "discovery_precedence": 0.0
              }
            },
            "antibody": {
              "top_category": "Unknown",
              "buckets": [],
              "categories": {
                "predicted_tractable_med_low_confidence": 0.0,
                "clinical_precedence": 0.0,
                "predicted_tractable_high_confidence": 0.0
              }
            }
          },
          "gene_info": {
            "symbol": "SMAD2",
            "name": "SMAD family member 2"
          },
          "id": "ENSG00000175387"
        },
        "association_score": {
          "datatypes": {
            "literature": 0.11214199898559289,
            "rna_expression": 0.0,
            "genetic_association": 0.16989700043360187,
            "somatic_mutation": 0.7694992905199061,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 0.0
          },
          "overall": 0.795385609949128,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.0,
            "europepmc": 0.11214199898559289,
            "intogen": 0.5208333333333334,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.16989700043360187,
            "slapenrich": 0.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.6392909571865727,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "disease": {
          "efo_info": {
            "therapeutic_area": {
              "labels": [
                "neoplastic, precancerous and hyperplastic disease",
                "respiratory or thoracic disease"
              ],
              "codes": [
                "MONDO_0045024",
                "OTAR_0000010"
              ]
            },
            "path": [
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0006858",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0009433",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ]
            ],
            "label": "lung carcinoma"
          },
          "id": "EFO_0001071"
        },
        "is_direct": true,
        "evidence_count": {
          "datatypes": {
            "literature": 33.0,
            "rna_expression": 0.0,
            "genetic_association": 1.0,
            "somatic_mutation": 17.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 0.0
          },
          "total": 51.0,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.0,
            "europepmc": 33.0,
            "intogen": 2.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 1.0,
            "slapenrich": 0.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 15.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "id": "ENSG00000175387-EFO_0001071"
      },
      {
        "target": {
          "tractability": {
            "smallmolecule": {
              "top_category": "Unknown",
              "small_molecule_genome_member": false,
              "buckets": [],
              "high_quality_compounds": 0,
              "ensemble": -1.0,
              "categories": {
                "clinical_precedence": 0.0,
                "predicted_tractable": 0.0,
                "discovery_precedence": 0.0
              }
            },
            "antibody": {
              "top_category": "Predicted_Tractable__High_confidence",
              "buckets": [
                5,
                7
              ],
              "categories": {
                "predicted_tractable_med_low_confidence": 0.25,
                "clinical_precedence": 0.0,
                "predicted_tractable_high_confidence": 0.3
              }
            }
          },
          "gene_info": {
            "symbol": "FGFRL1",
            "name": "fibroblast growth factor receptor like 1"
          },
          "id": "ENSG00000127418"
        },
        "association_score": {
          "datatypes": {
            "literature": 0.0,
            "rna_expression": 0.0,
            "genetic_association": 0.0,
            "somatic_mutation": 0.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 0.625
          },
          "overall": 0.625,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.0,
            "europepmc": 0.0,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 0.625,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "disease": {
          "efo_info": {
            "therapeutic_area": {
              "labels": [
                "neoplastic, precancerous and hyperplastic disease",
                "respiratory or thoracic disease"
              ],
              "codes": [
                "MONDO_0045024",
                "OTAR_0000010"
              ]
            },
            "path": [
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0006858",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0009433",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ]
            ],
            "label": "lung carcinoma"
          },
          "id": "EFO_0001071"
        },
        "is_direct": false,
        "evidence_count": {
          "datatypes": {
            "literature": 0.0,
            "rna_expression": 0.0,
            "genetic_association": 0.0,
            "somatic_mutation": 0.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 2.0
          },
          "total": 2.0,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.0,
            "europepmc": 0.0,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 2.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "id": "ENSG00000127418-EFO_0001071"
      },
      {
        "target": {
          "tractability": {
            "smallmolecule": {
              "top_category": "Clinical_Precedence",
              "small_molecule_genome_member": true,
              "buckets": [
                1,
                4,
                7,
                8
              ],
              "high_quality_compounds": 0,
              "ensemble": -1.0,
              "categories": {
                "clinical_precedence": 1.0,
                "predicted_tractable": 0.3,
                "discovery_precedence": 1.0
              }
            },
            "antibody": {
              "top_category": "Predicted_Tractable__High_confidence",
              "buckets": [
                4,
                5,
                7
              ],
              "categories": {
                "predicted_tractable_med_low_confidence": 0.25,
                "clinical_precedence": 0.0,
                "predicted_tractable_high_confidence": 1.0
              }
            }
          },
          "gene_info": {
            "symbol": "CASR",
            "name": "calcium sensing receptor"
          },
          "id": "ENSG00000036828"
        },
        "association_score": {
          "datatypes": {
            "literature": 0.132,
            "rna_expression": 0.0,
            "genetic_association": 0.0,
            "somatic_mutation": 0.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 0.5901768198011957
          },
          "overall": 0.6231768198011958,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.0,
            "europepmc": 0.132,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 0.5901768198011957,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "disease": {
          "efo_info": {
            "therapeutic_area": {
              "labels": [
                "neoplastic, precancerous and hyperplastic disease",
                "respiratory or thoracic disease"
              ],
              "codes": [
                "MONDO_0045024",
                "OTAR_0000010"
              ]
            },
            "path": [
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0006858",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "EFO_0000313",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "EFO_0000311",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "MONDO_0045024",
                "MONDO_0023370",
                "EFO_0000616",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0009433",
                "EFO_0003818",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0000376",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "EFO_0000684",
                "EFO_0003853",
                "MONDO_0020641",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0021117",
                "MONDO_0008903",
                "EFO_0001071"
              ],
              [
                "OTAR_0000010",
                "MONDO_0021350",
                "MONDO_0003274",
                "MONDO_0008903",
                "EFO_0001071"
              ]
            ],
            "label": "lung carcinoma"
          },
          "id": "EFO_0001071"
        },
        "is_direct": false,
        "evidence_count": {
          "datatypes": {
            "literature": 1.0,
            "rna_expression": 0.0,
            "genetic_association": 0.0,
            "somatic_mutation": 0.0,
            "known_drug": 0.0,
            "animal_model": 0.0,
            "affected_pathway": 2.0
          },
          "total": 3.0,
          "datasources": {
            "progeny": 0.0,
            "sysbio": 0.0,
            "expression_atlas": 0.0,
            "europepmc": 1.0,
            "intogen": 0.0,
            "phewas_catalog": 0.0,
            "uniprot_literature": 0.0,
            "phenodigm": 0.0,
            "eva": 0.0,
            "gene2phenotype": 0.0,
            "gwas_catalog": 0.0,
            "slapenrich": 2.0,
            "genomics_england": 0.0,
            "postgap": 0.0,
            "uniprot": 0.0,
            "chembl": 0.0,
            "cancer_gene_census": 0.0,
            "reactome": 0.0,
            "uniprot_somatic": 0.0,
            "eva_somatic": 0.0,
            "crispr": 0.0
          }
        },
        "id": "ENSG00000036828-EFO_0001071"
      }
    ],
    "size": 10
  })